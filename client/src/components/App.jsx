import React, { Component } from 'react'
import ActualHangar from './Hangars/ActualHangar'
import NavBar from './Generic/NavBar'
import Home from './Home'
import Hangarize from './Hangarize'
import Factory from '../logicControl/objectFactory'
import shipSeed from '../logicControl/shipSeed'
import manuSeed from '../logicControl/manuSeed'
import { db, dbGetBuyback } from '../logicControl/db'
import {
    dbGetHangar,
    dbGetPack,
    dbGetPacks,
    dbGetAllPacks,
    dbGetShip,
    dbGetShips,
    dbGetAllShips,
    dbGetAllItems,
    dbGetAllCCUs,
    dbGetCCUs,
    seedManus,
    seedShips,
    dbPutPack,
    dbPutShip,
    dbPutItem,
    dbPutItems,
    dbPutCCU,
    dbPutHangar,
    dbPutActualHangar,
    dbUpdateHangar,
    dbUpdateShip,
    dbUpdatePack,
    dbUpdateItem,
    dbUpdateCCU,
    dbUpdateBuyback,
    dbDeletePack,
    dbDeleteShip,
    dbDeleteShips,
    dbDeleteItem,
    dbDeleteItems,
    dbDeleteCCU,
} from '../logicControl/db'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentHangar: {
                packs: [],
                ships: [],
                ccus: [],
                items: [],
                id: 1,
            },
            currentBuyback: {
                packs: [],
                ships: [],
                ccus: [],
                items: [],
            },
            currentView: 'home',
            views: { home: 'home', actual: 'actual', hangarize: 'hangarize' },
            currentHangarId: 1,
            allCanDelete: false,
            packsCanDelete: false,
            shipsCanDelete: false,
            itemsCanDelete: false,
            ccusCanDelete: false,
            buybacksCanDelete: false,
        }
        this.refreshHangar = this.refreshHangar.bind(this)

        this.packsDeleteLock = this.packsDeleteLock.bind(this)
        this.shipsDeleteLock = this.shipsDeleteLock.bind(this)
        this.itemsDeleteLock = this.itemsDeleteLock.bind(this)
        this.ccusDeleteLock = this.ccusDeleteLock.bind(this)
        this.allDeleteLock = this.allDeleteLock.bind(this)
        this.buybacksDeleteLock = this.buybacksDeleteLock.bind(this)
        this.navToActual = this.navToActual.bind(this)
        this.navToHangarize = this.navToHangarize.bind(this)
        this.navToHome = this.navToHome.bind(this)
        this.addNewPackToHangar = this.addNewPackToHangar.bind(this)
        this.addNewShipToHangar = this.addNewShipToHangar.bind(this)
        this.addNewItemToHangar = this.addNewItemToHangar.bind(this)
        this.addNewCCUToHangar = this.addNewCCUToHangar.bind(this)

        this.addShipToPack = this.addShipToPack.bind(this)
        this.addItemToPack = this.addItemToPack.bind(this)
        this.addItemToShip = this.addItemToShip.bind(this)
        this.removePackFromHangar = this.removePackFromHangar.bind(this)
        this.removeShipFromPack = this.removeShipFromPack.bind(this)
        this.removeItemfromPack = this.removeItemfromPack.bind(this)
        this.removeShipFromHangar = this.removeShipFromHangar.bind(this)
        this.removeCCUFromHangar = this.removeCCUFromHangar.bind(this)
        this.removeItemFromHangar = this.removeItemFromHangar.bind(this)
        this.removeItemFromShip = this.removeItemFromShip.bind(this)

        this.meltPack = this.meltPack.bind(this)
        this.buyBackPack = this.buyBackPack.bind(this)
        this.meltShip = this.meltShip.bind(this)
        this.buyBackShip = this.buyBackShip.bind(this)
        this.upgradeShip = this.upgradeShip.bind(this)
        this.meltItem = this.meltItem.bind(this)
        this.buyBackItem = this.buyBackItem.bind(this)
        this.meltCCU = this.meltCCU.bind(this)
        this.buyBackCCU = this.buyBackCCU.bind(this)
        this.changeTotal = this.changeTotal.bind(this)

        this.Factory = new Factory()
        this.shipSeed = shipSeed
        this.nickNames = {}
        for (let manu of manuSeed) {
            this.nickNames[manu.name] = manu.nickName
        }

        this.db = db
    }

    componentDidMount() {
        // this.db.open().catch((err) => {
        //     console.log('Error opening database')
        // })
        seedManus()
        seedShips()

        this.refreshHangar()
    }

    refreshHangar() {
        Promise.all([
            dbGetAllPacks(this.state.currentHangarId),
            dbGetAllShips(this.state.currentHangarId),
            dbGetAllItems(this.state.currentHangarId),
            dbGetAllCCUs(this.state.currentHangarId),
            dbGetHangar(this.state.currentHangarId),
        ])
            .then((results) => {
                let total = 0
                let packsTbl = {}
                for (let pk of results[0]) {
                    let pack = pk
                    pack.ships = []
                    pack.items = []
                    packsTbl[pack.id] = pack
                    if (!pk.buyback) {
                        total += pk.price
                    }
                }
                console.log('packsTbl', packsTbl)
                let shipsTbl = {}
                for (let s of results[1]) {
                    let ship = s
                    ship.items = []

                    shipsTbl[ship.id] = ship
                    if (!s.buyback) {
                        total += s.price
                    }
                }
                let itemsTbl = {}
                for (let itm of results[2]) {
                    let item = itm
                    if (item.itemPackId === 0 && item.itemShipId === 0) {
                        itemsTbl[item.id] = item
                    } else if (item.itemShipId === 0 && item.itemPackId !== 0) {
                        packsTbl[item.itemPackId].items.push(item)
                    } else {
                        shipsTbl[item.itemShipId].items.push(item)
                    }
                    if (!itm.buyback) {
                        total += itm.price
                    }
                }
                let hangar = results[4]
                let buyback = {}
                let allShips = Object.values(shipsTbl)
                let PackShips = allShips.filter((s) => s.shipPackId !== 0)
                let nonPackShips = allShips.filter((s) => s.shipPackId === 0)
                for (let ps of PackShips) {
                    packsTbl[ps.shipPackId].ships.push(ps)
                }
                hangar.ships = nonPackShips.filter((s) => !s.buyback)
                buyback.ships = nonPackShips.filter((s) => s.buyback)
                let allItems = Object.values(itemsTbl)
                hangar.items = allItems.filter((it) => !it.buyback)
                buyback.items = allItems.filter((it) => it.buyback)
                let allPacks = Object.values(packsTbl)
                hangar.packs = allPacks.filter((p) => !p.buyback)
                buyback.packs = allPacks.filter((p) => p.buyback)
                let allCCUs = [...results[3]].sort((a, b) => {
                    let aName = a.base.toUpperCase()
                    let bName = b.base.toUpperCase()
                    if (aName < bName) {
                        return -1
                    }
                    if (aName > bName) {
                        return 1
                    }
                    return 0
                })
                for (let c of allCCUs) {
                    if (!c.buyback) {
                        total += c.price
                    }
                }
                hangar.ccus = allCCUs.filter((c) => !c.buyback)
                buyback.ccus = allCCUs.filter((c) => c.buyback)
                hangar.id = this.state.currentHangarId
                hangar.calcTotal = total
                console.log('hanger on refresh', results[4])

                this.setState({
                    currentHangar: hangar,
                    currentBuyback: buyback,
                })
            })
            .catch((err) => {
                console.log('Error getting packs', err)
            })
    }

    allDeleteLock(e) {
        e.preventDefault()
        let locked = !this.state.allCanDelete
        this.setState({
            packsCanDelete: locked,
            shipsCanDelete: locked,
            itemsCanDelete: locked,
            ccusCanDelete: locked,
            allCanDelete: locked,
            buybacksCanDelete: locked,
        })
    }

    packsDeleteLock(e) {
        e.preventDefault()
        let locked = !this.state.packsCanDelete
        this.setState({ packsCanDelete: locked })
    }

    shipsDeleteLock(e) {
        e.preventDefault()
        let locked = !this.state.shipsCanDelete
        this.setState({ shipsCanDelete: locked })
    }

    itemsDeleteLock(e) {
        e.preventDefault()
        let locked = !this.state.itemsCanDelete
        this.setState({ itemsCanDelete: locked })
    }
    ccusDeleteLock(e) {
        e.preventDefault()
        let locked = !this.state.ccusCanDelete
        this.setState({ ccusCanDelete: locked })
    }
    buybacksDeleteLock(e) {
        e.preventDefault()
        let locked = !this.state.buybacksCanDelete
        this.setState({ buybacksCanDelete: locked })
    }

    addNewPackToHangar(e) {
        e.preventDefault()
        e.persist()

        for (var i = 0; i < e.target.length; i++) {
            console.log(`target number ${i}: ${e.target[i].value}`)
        }

        let name = e.target[0].value
        let price = parseInt(e.target[1].value) || 0
        let items = []
        if (e.target[2].value !== 'Hangar...') {
            items.push({ name: e.target[2].value + ' hangar' })
        }
        if (parseInt(e.target[3].value) > 0) {
            items.push({ name: e.target[3].value + ' UEC' })
        }
        for (var i = 4; i < 7; i++) {
            if (e.target[i].checked) {
                items.push({ name: e.target[i].name })
            }
        }

        let pack = this.Factory.newPack(name, price, this.state.currentHangarId)

        dbPutPack(pack)
            .then((id) => {
                let packItems = []
                for (let it of items) {
                    packItems.push(
                        this.Factory.newItem(
                            it.name,
                            0,
                            false,
                            this.state.currentHangarId,
                            id
                        )
                    )
                }
                dbPutItems(packItems).then(this.refreshHangar())
            })
            .catch((err) => {
                console.log('Error saving pack', err)
            })

        e.target.reset()
    }

    addShipToPack(packId, ship, shipName, buyback = false) {
        const hangarId = this.state.currentHangarId
        let newShip

        console.log(
            'Packid ===',
            packId,
            'shipid ===',
            ship.id,
            'shipname===',
            shipName,
            'hangarId',
            hangarId
        )
        if (ship.id === 0 && shipName.length === 0) {
            return null
        }
        if (ship.id === 0 && shipName.length > 0) {
            newShip = this.Factory.newShip(
                shipName,
                0,
                undefined,
                undefined,
                undefined,
                hangarId,
                packId,
                buyback
            )
            console.log(newShip)
        }
        if (ship.id > 0) {
            newShip = this.Factory.newShip(
                ship.name,
                0,
                ship.manufacturer,
                ship.role,
                ship.size,
                hangarId,
                packId,
                buyback
            )
            // name = 'Name',
            // price = 0,
            // manufacturer = 'Unknown manufacturer',
            // role = 'Role',
            // size = 'Size',
            // hangarId = 1,
            // packId = 0,
            // buyback = false
        }

        dbPutShip(newShip)
            .then(this.refreshHangar())

            .catch((err) => {
                console.log('Error trying to add ship to pack', err)
            })
    }

    addItemToPack(packId, item, itemName) {
        console.log('Add item to pack called in App')

        let newItem
        if (item.id === 0 && itemName.length === 0) {
            return null
        }
        if (item.id === 0 && itemName.length > 0) {
            newItem = this.Factory.newItem(itemName)
            console.log(newItem)

            newItem = this.Factory.newItem(
                itemName,
                item.price,
                false,
                this.state.currentHangarId,
                packId
            )
        }

        dbPutItem(newItem)
            .then(this.refreshHangar())
            .catch((err) => console.log('Error adding item to pack', err))
    }

    addItemToShip(shipId, item, itemName, packId) {
        //hangar -> packs -> ships ->
        console.log('Add Item To Ship in APP:')
        const inPack = packId !== undefined
        console.log(
            `shipId = ${shipId}, item = ${item}, itemName = ${itemName}, packId = ${packId}, inpack? ${inPack}`
        )

        let newItem
        if (item.id === 0 && itemName.length === 0) {
            return null
        }
        if (item.id === 0 && itemName.length > 0) {
            newItem = this.Factory.newItem(
                itemName,
                0,
                false,
                this.state.currentHangarId,
                inPack ? packId : 0,
                shipId,
                false
            )
            console.log(newItem)
        }
        dbPutItem(newItem)
            .then(this.refreshHangar())
            .catch((err) => console.log('Error adding item to ship', err))
        // name = 'Item',
        // price = 0,
        // meltable = false,
        // hangarId = 1,
        // packId = 0,
        // shipId = 0,
        // buyback = false
    }

    addNewShipToHangar(e) {
        e.preventDefault()
        e.persist()

        let name = e.target[0].value
        let manufacturer = e.target[1].value || 'Unknown Manufacturer'
        let price = parseInt(e.target[2].value) || 0
        let items = []
        let size, role
        if (e.target[3].value !== 'Size...') {
            size = e.target[3].value
        }
        if (e.target[4].value !== 'Role...') {
            role = e.target[4].value
        }
        if (e.target[5].value !== 'Hangar...') {
            items.push({ name: e.target[5].value + ' hangar' })
        }
        if (e.target[6].value !== '') {
            items.push({ name: e.target[6].value + ' Skin' })
        }
        if (e.target[7].checked) {
            items.push({ name: e.target[7].name })
        }
        let ship = this.Factory.newShip(
            name,
            price,
            manufacturer,
            role,
            size,
            this.state.currentHangarId
        )

        //  (name = 'Item'),
        //  (price = 0),
        //  (meltable = false),
        //  (hangarId = 1),
        //  (packId = 0),
        //  (shipId = 0)
        //  ship.name,

        dbPutShip(ship)
            .then((id) => {
                let shipItems = []
                for (let it of items) {
                    shipItems.push(
                        // name = 'Item',
                        // price = 0,
                        // meltable = false,
                        // hangarId = 1,
                        // packId = 0,
                        // shipId = 0,
                        // buyback = false
                        this.Factory.newItem(
                            it.name,
                            0,
                            false,
                            this.state.currentHangarId,
                            0,
                            id,
                            false
                        )
                    )
                }
                dbPutItems(shipItems).then(this.refreshHangar())
            })

            .catch((err) => {
                console.log('Error saving ship', err)
            })
        e.target.reset()
    }
    addNewItemToHangar(e) {
        e.preventDefault()
        e.persist()

        // for (var i = 0; i < e.target.length; i++) {
        //     console.log(`target number ${i}: ${e.target[i].value}`)
        // }
        let name = e.target[0].value
        let price = parseInt(e.target[1].value) || 0
        let meltable = e.target[2].checked

        let item = this.Factory.newItem(
            name,
            price,
            meltable,
            this.state.currentHangarId,
            0,
            0,
            false
        )
        // name = 'Item',
        // price = 0,
        // meltable = false,
        // hangarId = 1,
        // packId = 0,
        // shipId = 0,
        // buyback = false

        dbPutItem(item)
            .then(this.refreshHangar())

            .catch((err) => {
                console.log('Error saving ship', err)
            })
    }

    addNewCCUToHangar(e) {
        for (var i = 0; i < e.target.length; i++) {
            console.log(`target number ${i}: ${e.target[i].value}`)
        }
        const hangarId = this.state.currentHangarId
        console.log('hangarId in add new ccu', hangarId)
        let base = e.target[0].value
        let to = e.target[1].value
        let price = parseInt(e.target[2].value) || 0

        let ccu = this.Factory.newCCU(base, to, price, 0, 0, hangarId, false)
        console.log('CCU in add new ccu', ccu)
        //   (base = 'base ship'),
        //   (to = 'to ship'),
        //   (price = 'price'),
        //   (appliedBase = 0),
        //   (appliedTo = 0),
        //   (hangarId = 0),
        //   (buyback = false)

        dbPutCCU(ccu)
            .then(this.refreshHangar())
            .catch((err) => {
                console.log('Error saving ccu', err)
            })
    }

    removePackFromHangar(packId, shipIds) {
        //remove all packs items from db
        if (this.state.packsCanDelete === false) {
            return null
        }

        console.log(
            'Before remove pack:',
            'shipKeys==>',
            shipIds,

            'packId',
            packId
        )
        let pack = {}

        for (let pk of this.state.currentHangar.packs) {
            if (pk.id === packId) {
                pack = pk
            }
        }
        let ships = [...pack.ships]
        let items = [...pack.items]
        for (let shp of ships) {
            items = [...items, ...shp.items]
        }
        let itemIds = items.map((itm) => itm.id)
        console.log('itemIds==', itemIds, 'shipIds==', shipIds)

        Promise.all([
            dbDeletePack(packId),
            dbDeleteItems(itemIds),
            dbDeleteShips(shipIds),
        ])
            .then(this.refreshHangar())

            .catch((err) => {
                console.log('Error removing pack from hangar', err)
            })
    }

    removeShipFromPack(shipId, packId) {
        console.log('removeShipFromPack shipId', shipId, 'packId', packId)
        if (!this.state.packsCanDelete) {
            return null
        }
        let packs = [...this.state.currentHangar.packs]
        let pack = {}
        for (let p of packs) {
            if (p.id === packId) {
                pack = p
            }
        }

        let ship = {}
        let itemIds = []
        for (let s of pack.ships) {
            if (s.id === shipId) {
                ship = s
            }
        }
        for (let i of ship.items) {
            itemIds.push(i.id)
        }
        Promise.all([dbDeleteShip(shipId), dbDeleteItems(itemIds)])

            .then(this.refreshHangar())
            .catch((err) => {
                console.log('Error removing pack from hangar', err)
            })
    }
    removeItemfromPack(itemId) {
        if (!this.state.packsCanDelete) {
            return null
        }
        dbDeleteItem(itemId)
            .then(this.refreshHangar())
            .catch((err) => {
                console.log('Error deleting item from pack', err)
            })
    }
    removeItemFromShip(itemId, inPack = false) {
        if (
            (inPack && !this.state.packsCanDelete) ||
            (!inPack && !this.state.shipsCanDelete)
        ) {
            return null
        }
        dbDeleteItem(itemId)
            .then(this.refreshHangar())
            .catch((err) => {
                console.log('Error adding item to ship', err)
            })
    }
    removeShipFromHangar(shipId) {
        if (!this.state.shipsCanDelete) {
            return null
        }
        let ships = [...this.state.currentHangar.ships]
        let ship = {}
        let itemIds = []
        for (let s of ships) {
            if (s.id === shipId) {
                ship = s
            }
        }
        for (let i of ship.items) {
            itemIds.push(i.id)
        }
        Promise.all([dbDeleteShip(shipId), dbDeleteItems(itemIds)])
            .then(this.refreshHangar())
            .catch((err) => {
                console.log('Error removing ship from hangar', err)
            })
    }
    removeCCUFromHangar(ccuId) {
        if (this.state.ccusCanDelete === false) {
            return null
        }

        dbDeleteCCU(ccuId)
            .then(this.refreshHangar())
            .catch((err) => {
                console.log('Error removing ccu from hangar', err)
            })
    }
    removeItemFromHangar(itemId) {
        if (this.state.itemsCanDelete === false) {
            return null
        }

        dbDeleteItem(itemId)
            .then(this.refreshHangar())
            .catch((err) => {
                console.log('Error removing ccu from hangar', err)
            })
    }

    meltPack(packId) {
        dbUpdatePack(packId, { buyback: true })
            .then(this.refreshHangar())
            .catch((err) => {
                console.log('Error melting pack', err)
            })
    }

    buyBackPack(packId) {
        dbUpdatePack(packId, { buyback: false })
            .then(this.refreshHangar())
            .catch((err) => console.log('Error buying pack', err))
    }

    meltShip(shipId) {
        console.log('meltship id', shipId)
        dbUpdateShip(shipId, { buyback: true })
            .then(this.refreshHangar())
            .catch((err) => console.log('Error melting ship', err))
    }

    buyBackShip(shipId) {
        dbUpdateShip(shipId, { buyback: false })
            .then(this.refreshHangar())
            .catch((err) => console.log('Error buying ship', err))
    }

    upgradeShip(shipId, name, price) {
        dbUpdateShip(shipId, { name: name, price: price })
            .then(this.refreshHangar())
            .catch((err) => console.log('Error upgrading ship', err))
    }

    meltItem(itemId) {
        dbUpdateItem(itemId, { buyback: true })
            .then(this.refreshHangar())
            .catch((err) => console.log('Error melting item', err))
    }

    buyBackItem(itemId) {
        dbUpdateItem(itemId, { buyback: false })
            .then(this.refreshHangar())
            .catch((err) => console.log('Error buying item', err))
    }

    meltCCU(ccuId) {
        dbUpdateCCU(ccuId, { buyback: true })
            .then(this.refreshHangar())
            .catch((err) => console.log('Error melt ccu', err))
    }

    buyBackCCU(ccuId) {
        dbUpdateCCU(ccuId, { buyback: false })
            .then(this.refreshHangar())
            .catch((err) => console.log('Error buying ccu', err))
    }

    changeTotal(total) {
        const hangarId = this.state.currentHangar.id
        console.log('Total value', total, 'HangarId', hangarId)

        dbUpdateHangar(hangarId, { total: total })
            .then(this.refreshHangar())
            .catch((err) => {
                console.log('Error updating total', err)
            })
    }

    navToActual(e) {
        e.preventDefault()
        this.setState({ currentView: 'actual' })
    }

    navToHangarize(e) {
        e.preventDefault()
        this.setState({ currentView: 'hangarize' })
    }

    navToHome(e) {
        e.preventDefault()
        this.setState({ currentView: 'home' })
    }

    render() {
        const packs = this.state.currentHangar.packs
        const ships = this.state.currentHangar.ships
        const ccus = this.state.currentHangar.ccus
        const items = this.state.currentHangar.items
        const buyback = this.state.currentBuyback
        const calcTotal = this.state.currentHangar.calcTotal
        const credit = this.state.currentHangar.credit
        const hangarTotal = this.state.currentHangar.total

        return (
            <>
                <div className="bg-dark text-light">
                    {' '}
                    <NavBar
                        navToHome={this.navToHome}
                        navToActual={this.navToActual}
                        navToHangarize={this.navToHangarize}
                    />{' '}
                </div>
                <div>
                    {this.state.currentView === 'home' ? (
                        <Home
                            navToActual={this.navToActual}
                            navToHangarize={this.navToHangarize}
                        />
                    ) : this.state.currentView === 'actual' ? (
                        <ActualHangar
                            packs={packs}
                            ships={ships}
                            ccus={ccus}
                            items={items}
                            buyback={buyback}
                            calcTotal={calcTotal}
                            credit={credit}
                            packsDeleteLock={this.packsDeleteLock}
                            packsCanDelete={this.state.packsCanDelete}
                            shipsDeleteLock={this.shipsDeleteLock}
                            shipsCanDelete={this.state.shipsCanDelete}
                            itemsDeleteLock={this.itemsDeleteLock}
                            itemsCanDelete={this.state.itemsCanDelete}
                            ccusDeleteLock={this.ccusDeleteLock}
                            ccusCanDelete={this.state.ccusCanDelete}
                            buybacksDeleteLock={this.buybacksDeleteLock}
                            buybacksCanDelete={this.state.buybacksCanDelete}
                            allDeleteLock={this.allDeleteLock}
                            allCanDelete={this.state.allCanDelete}
                            addNewPackToHangar={this.addNewPackToHangar}
                            addNewShipToHangar={this.addNewShipToHangar}
                            addNewItemToHangar={this.addNewItemToHangar}
                            addNewCCUToHangar={this.addNewCCUToHangar}
                            suggestShipNames={this.suggestShipNames}
                            renderSuggestedShipNames={
                                this.renderSuggestedShipNames
                            }
                            shipNameField={this.state.shipNameField}
                            acceptShipInputForPack={this.acceptShipInputForPack}
                            selectedShip={this.state.selectedShip}
                            resetShipAddForm={this.resetShipAddForm}
                            addShipToPack={this.addShipToPack}
                            addItemToPack={this.addItemToPack}
                            addItemToShip={this.addItemToShip}
                            removePackFromHangar={this.removePackFromHangar}
                            removeShipFromPack={this.removeShipFromPack}
                            removeItemfromPack={this.removeItemfromPack}
                            removeShipFromHangar={this.removeShipFromHangar}
                            removeCCUFromHangar={this.removeCCUFromHangar}
                            removeItemFromHangar={this.removeItemFromHangar}
                            removeItemFromShip={this.removeItemFromShip}
                            meltPack={this.meltPack}
                            buyBackPack={this.buyBackPack}
                            meltShip={this.meltShip}
                            buyBackShip={this.buyBackShip}
                            upgradeShip={this.upgradeShip}
                            meltItem={this.meltItem}
                            buyBackItem={this.buyBackItem}
                            meltCCU={this.meltCCU}
                            buyBackCCU={this.buyBackCCU}
                            changeTotal={this.changeTotal}
                            hangarTotal={hangarTotal}
                        />
                    ) : this.state.currentView === 'hangarize' ? (
                        <Hangarize />
                    ) : (
                        ''
                    )}
                </div>
            </>
        )
    }
}

export default App
