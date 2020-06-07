import React, { Component } from 'react'
import ActualHangar from './Hangars/ActualHangar'
import NavBar from './Generic/NavBar'
import Home from './Home'
import Hangarize from './Hangarize'
import Factory from '../logicControl/objectFactory'
import shipSeed from '../logicControl/shipSeed'
import manuSeed from '../logicControl/manuSeed'
import { db } from '../logicControl/db'
import {
    dbGetHangar,
    dbGetPack,
    dbGetPacks,
    dbGetAllPacks,
    dbGetShip,
    dbGetShips,
    dbGetAllShips,
    dbGetItems,
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
    dbDeletePack,
    dbDeleteShip,
    dbBulkDeleteShips,
    dbDeleteItem,
    dbBulkDeleteItems,
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
                buyback: {},
            },

            actualHangar: {},

            currentView: 'home',
            views: { home: 'home', actual: 'actual', hangarize: 'hangarize' },
            currentHangarId: 1,
            allCanDelete: false,
            packsCanDelete: false,
            shipsCanDelete: false,
            itemsCanDelete: false,
            ccusCanDelete: false,
        }
        this.packsDeleteLock = this.packsDeleteLock.bind(this)
        this.shipsDeleteLock = this.shipsDeleteLock.bind(this)
        this.itemsDeleteLock = this.itemsDeleteLock.bind(this)
        this.ccusDeleteLock = this.ccusDeleteLock.bind(this)
        this.allDeleteLock = this.allDeleteLock.bind(this)
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
        this.Factory = new Factory()
        this.shipSeed = shipSeed
        this.nickNames = {}
        for (let manu of manuSeed) {
            this.nickNames[manu.name] = manu.nickName
        }

        this.db = db
    }

    componentDidMount() {
        this.db.open().catch((err) => {
            console.log('Error opening database')
        })
        seedManus()
        seedShips()

        dbGetHangar(this.state.currentHangarId)
            .then((hangar) => {
                this.setState({ currentHangar: hangar })
            })
            .catch('error getting actual hangar')
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

    addNewPackToHangar(e) {
        e.preventDefault()
        e.persist()

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

        let pack = this.Factory.newPack(name, price, [], items)
        let packs = this.state.currentHangar.packs

        dbPutPack(pack)
            .then((id) => {
                pack.id = id
                packs.push(pack)
                dbUpdateHangar(this.state.currentHangar.id, {
                    packs: packs,
                }).then(() => {
                    let hangar = this.state.currentHangar
                    hangar.packs = packs
                    this.setState({ currentHangar: hangar })
                })
            })
            .catch((err) => {
                console.log('Error saving pack', err)
            })

        e.target.reset()
    }

    addShipToPack(packId, ship, shipName) {
        let newShip

        console.log(
            'Packid ===',
            packId,
            'shipid ===',
            ship.id,
            'shipname===',
            shipName
        )
        if (ship.id === 0 && shipName.length === 0) {
            return null
        }
        if (ship.id === 0 && shipName.length > 0) {
            newShip = this.Factory.newShip(shipName)
            console.log(newShip)
        }
        if (ship.id > 0) {
            newShip = this.Factory.newShip(
                ship.name,
                ship.defaultPrice,
                [],
                ship.manufacturer,
                ship.role,
                ship.size
            )
        }

        let packs = this.state.currentHangar.packs
        let pack = {}

        for (let pk of packs) {
            if (pk.id === packId) {
                pack = pk
                break
            }
        }
        let otherPacks = packs.filter((p) => p.id !== packId)
        let finalPacks = []

        dbPutShip(newShip)
            .then((id) => {
                newShip.id = id
                pack.ships.push(newShip)
                finalPacks = [...otherPacks, pack].sort((a, b) => {
                    return a.id - b.id
                })

                dbUpdatePack(packId, { ships: pack.ships }).then(() => {
                    dbUpdateHangar(this.state.currentHangar.id, {
                        packs: finalPacks,
                    }).then(() => {
                        let hngr = this.state.currentHangar
                        hngr.packs = finalPacks
                        this.setState({ currentHangar: hngr })
                    })
                })
            })
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
        }
        if (item.id > 0) {
            newItem = this.Factory.newItem(item.name, item.price, false)
        }

        let packs = this.state.currentHangar.packs
        let pack = {}

        for (let pk of packs) {
            if (pk.id === packId) {
                pack = pk
                break
            }
        }
        let otherPacks = packs.filter((p) => p.id !== packId)
        let finalPacks = []

        pack.items.push(newItem)
        finalPacks = [...otherPacks, pack].sort((a, b) => {
            return a.id - b.id
        })
        dbUpdatePack(packId, { items: pack.items }).then(() => {
            dbUpdateHangar(this.state.currentHangar.id, {
                packs: finalPacks,
            }).then(() => {
                let hngr = this.state.currentHangar
                hngr.packs = finalPacks
                this.setState({ currentHangar: hngr })
            })
        })
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
            newItem = this.Factory.newItem(itemName)
            console.log(newItem)
        }

        let packs = []
        let pack = {}
        let ships = []
        let ship = {}

        let otherPacks = []
        let finalPacks = []
        if (inPack) {
            packs = this.state.currentHangar.packs

            for (let pk of packs) {
                if (pk.id === packId) {
                    pack = pk
                    break
                }
            }
            otherPacks = packs.filter((p) => p.id !== packId)
            ships = pack.ships
            for (let s of ships) {
                if (s.id === shipId) {
                    ship = s
                    break
                }
            }
        } else {
            ships = this.state.currentHangar.ships
            ship = {}

            for (let s of ships) {
                if (s.id === shipId) {
                    ship = s
                    break
                }
            }
        }
        let otherShips = ships.filter((s) => s.id !== shipId)
        let finalShips = []
        let finalItems = []

        if (inPack) {
            finalItems = ship.items.push(newItem)
            finalShips = [...otherShips, ship].sort((a, b) => {
                return a.id - b.id
            })
            pack.ships = finalShips
            finalPacks = [...otherPacks, pack].sort((a, b) => {
                return a.id - b.id
            })
            console.log('finalShips going into updateShip', finalShips)
            console.log('finalPacks inside pack if', finalPacks)
            Promise.all([
                dbUpdateShip(shipId, { items: finalItems }),
                dbUpdatePack(packId, { ships: finalShips }),
                dbUpdateHangar(this.state.currentHangar.id, {
                    packs: finalPacks,
                }),
            ])
                .then(() => {
                    let hngr = this.state.currentHangar
                    hngr.packs = finalPacks
                    this.setState({ currentHangar: hngr })
                })

                .catch((err) => {
                    console.log('Error adding item to ship', err)
                })
        } else {
            ship.items.push(newItem)
            finalShips = [...otherShips, ship].sort((a, b) => {
                return a.id - b.id
            })
            console.log('finalShips going into updateShip', finalShips)
            Promise.all([
                dbUpdateShip(shipId, { items: ship.items }),
                dbUpdateHangar(this.state.currentHangar.id, {
                    ships: finalShips,
                }),
            ])
                .then(() => {
                    let hngr = this.state.currentHangar
                    hngr.ships = finalShips
                    this.setState({ currentHangar: hngr })
                })

                .catch((err) => {
                    console.log('Error adding item to ship', err)
                })
        }
    }

    addNewShipToHangar(e) {
        e.preventDefault()
        e.persist()

        // for (var i = 0; i < e.target.length; i++) {
        //     console.log(`target number ${i}: ${e.target[i].value}`)
        // }

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
            items,
            manufacturer,
            role,
            size
        )
        let ships = this.state.currentHangar.ships

        dbPutShip(ship)
            .then((id) => {
                ship.id = id
                ships.push(ship)
                dbUpdateHangar(this.state.currentHangar.id, {
                    ships: ships,
                }).then(() => {
                    let hangar = this.state.currentHangar
                    hangar.ships = ships
                    this.setState({ currentHangar: hangar })
                })
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

        let item = this.Factory.newItem(name, price, meltable)
        let items = this.state.currentHangar.items

        dbPutItem(item)
            .then((id) => {
                item.id = id
                items.push(item)
                dbUpdateHangar(this.state.currentHangar.id, {
                    items: items,
                }).then(() => {
                    let hangar = this.state.currentHangar
                    hangar.items = items
                    this.setState({
                        currentHangar: hangar,
                    })
                })
            })
            .catch((err) => {
                console.log('Error saving ship', err)
            })
    }

    addNewCCUToHangar(e) {
        for (var i = 0; i < e.target.length; i++) {
            console.log(`target number ${i}: ${e.target[i].value}`)
        }
        let base = e.target[0].value
        let to = e.target[1].value
        let price = parseInt(e.target[2].value) || 0

        let ccu = this.Factory.newCCU(base, to, price)
        let ccus = this.state.currentHangar.ccus
        dbPutCCU(ccu)
            .then((id) => {
                ccu.id = id
                ccus.push(ccu)
                dbUpdateHangar(this.state.currentHangar.id, {
                    ccus: ccus,
                }).then(() => {
                    let hangar = this.state.currentHangar
                    hangar.ccus = ccus
                    this.setState({
                        currentHangar: hangar,
                    })
                })
            })
            .catch((err) => {
                console.log('Error saving ccu', err)
            })
    }

    removePackFromHangar(packId, shipIds) {
        //remove all packs items from db
        if (this.state.packsCanDelete === false) {
            return null
        }
        let packs = this.state.currentHangar.packs.filter(
            (pack) => pack.id !== packId
        )
        console.log(
            'Before remove pack:',
            'shipKeys==>',
            shipIds,

            'packId',
            packId
        )
        Promise.all([
            dbBulkDeleteShips(shipIds),
            dbDeletePack(packId),
            dbUpdateHangar(this.state.currentHangar.id, { packs: packs }),
        ])
            .then(() => {
                let hangar = this.state.currentHangar
                hangar.packs = packs
                console.log('Hangar after remove pack: ', hangar)
                this.setState({ currentHangar: hangar })
            })
            .catch((err) => {
                console.log('Error removing pack from hangar', err)
            })
    }

    removeShipFromPack(packId, shipId) {
        console.log('remove ship from pack', 'PackId', packId, 'shipId', shipId)
        if (this.state.packsCanDelete === false) {
            return null
        }
        let packs = this.state.currentHangar.packs
        let pack = {}

        for (let pk of packs) {
            if (pk.id === packId) {
                pack = pk
                break
            }
        }

        let otherShips = pack.ships.filter((shp) => shp.id !== shipId)

        dbDeleteShip(shipId)
            .then(() => {
                pack.ships = otherShips
                dbUpdateHangar(this.state.currentHangar.id, {
                    packs: packs,
                }).then(() => {
                    let hangar = this.state.currentHangar
                    hangar.packs = packs
                    console.log('Hangar after remove pack: ', hangar)
                    this.setState({ currentHangar: hangar })
                })
            })
            .catch((err) => {
                console.log('Error removing pack from hangar', err)
            })
    }
    removeItemfromPack(packId, itemName) {
        if (this.state.packsCanDelete === false) {
            return null
        }
        let packs = this.state.currentHangar.packs
        let pack = {}
        let itemIndex = 0

        for (let pk of packs) {
            if (pk.id === packId) {
                pack = pk
                break
            }
        }
        if (pack.items.length > 1) {
            for (let i = 0; i < pack.items; i++) {
                if (pack.items[i].name === itemName) {
                    itemIndex = i
                    break
                }
            }
        }

        pack.items.splice(itemIndex, 1)

        dbUpdatePack(packId, { packs: packs })
            .then(() => {
                let hangar = this.state.currentHangar
                hangar.packs = packs
                dbUpdateHangar(this.state.currentHangar.id, {
                    packs: packs,
                }).then(() => {
                    this.setState({ currentHangar: hangar })
                })
            })
            .catch()
    }
    removeItemFromShip(shipId, itemName, packId) {
        const inPack = packId !== undefined
        console.log('inPack?', inPack)

        let packs = []
        let pack = {}
        let ships = []
        let ship = {}

        let otherPacks = []
        let finalPacks = []
        if (inPack) {
            packs = this.state.currentHangar.packs

            for (let pk of packs) {
                if (pk.id === packId) {
                    pack = pk
                    break
                }
            }
            otherPacks = packs.filter((p) => p.id !== packId)
            ships = pack.ships
            for (let s of ships) {
                if (s.id === shipId) {
                    ship = s
                    break
                }
            }
        } else {
            ships = this.state.currentHangar.ships
            ship = {}

            for (let s of ships) {
                if (s.id === shipId) {
                    ship = s
                    break
                }
            }
        }
        let otherShips = ships.filter((s) => s.id !== shipId)
        let finalShips = []
        let finalItems = []
        let itemIndex = 0
        for (let i = 0; i < ship.items.length; i++) {
            if (ship.items[i].name === itemName) {
                itemIndex = i
                break
            }
        }
        ship.items.splice(itemIndex, 1)

        if (inPack) {
            finalItems = ship.items
            finalShips = [...otherShips, ship].sort((a, b) => {
                return a.id - b.id
            })
            pack.ships = finalShips
            finalPacks = [...otherPacks, pack].sort((a, b) => {
                return a.id - b.id
            })
            console.log('finalShips going into updateShip', finalShips)
            console.log('finalPacks inside pack if', finalPacks)
            Promise.all([
                dbUpdateShip(shipId, { items: finalItems }),
                dbUpdatePack(packId, { ships: finalShips }),
                dbUpdateHangar(this.state.currentHangar.id, {
                    packs: finalPacks,
                }),
            ])
                .then(() => {
                    let hngr = this.state.currentHangar
                    hngr.packs = finalPacks
                    this.setState({ currentHangar: hngr })
                })

                .catch((err) => {
                    console.log('Error adding item to ship', err)
                })
        } else {
            console.log(
                'shipId',
                shipId,
                'itemName',
                itemName,
                'packId',
                packId,
                'ship.items',
                ship.items
            )
            finalShips = [...otherShips, ship].sort((a, b) => {
                return a.id - b.id
            })
            console.log('finalShips going into updateShip', finalShips)
            Promise.all([
                dbUpdateShip(shipId, { items: ship.items }),
                dbUpdateHangar(this.state.currentHangar.id, {
                    ships: finalShips,
                }),
            ])
                .then(() => {
                    let hngr = this.state.currentHangar
                    hngr.ships = finalShips
                    this.setState({ currentHangar: hngr })
                })

                .catch((err) => {
                    console.log('Error adding item to ship', err)
                })
        }
    }
    removeShipFromHangar(shipId) {
        if (this.state.shipsCanDelete === false) {
            return null
        }
        let ships = [...this.state.currentHangar.ships]
        let otherShips = ships.filter((shp) => shp.id !== shipId)

        console.log('removeshipfromhangar ships', otherShips, 'shipId', shipId)
        Promise.all([
            dbDeleteShip(shipId),
            dbUpdateHangar(this.state.currentHangar.id, {
                ships: otherShips,
            }),
        ])

            .then(() => {
                let hangar = this.state.currentHangar
                hangar.ships = otherShips
                this.setState({ currentHangar: hangar })
            })

            .catch((err) => {
                console.log('Error removing ship from hangar', err)
            })
    }
    removeCCUFromHangar(ccuId) {
        if (this.state.ccusCanDelete === false) {
            return null
        }
        let ccus = [...this.state.currentHangar.ccus]
        let otherCCUs = ccus.filter((c) => c.id !== ccuId)
        Promise.all([
            dbDeleteCCU(ccuId),
            dbUpdateHangar(this.state.currentHangar.id, { ccus: otherCCUs }),
        ])
            .then(() => {
                let hangar = this.state.currentHangar
                hangar.ccus = otherCCUs
                this.setState({ currentHangar: hangar })
            })
            .catch((err) => {
                console.log('Error removing ccu from hangar', err)
            })
    }
    removeItemFromHangar(itemId) {
        if (this.state.itemsCanDelete === false) {
            return null
        }
        let items = [...this.state.currentHangar.items]
        let otherItems = items.filter((itm) => itm.id !== itemId)
        Promise.all([
            dbDeleteItem(itemId),
            dbUpdateHangar(this.state.currentHangar.id, { items: otherItems }),
        ])
            .then(() => {
                let hangar = this.state.currentHangar
                hangar.items = otherItems
                this.setState({ currentHangar: hangar })
            })
            .catch((err) => {
                console.log('Error removing ccu from hangar', err)
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
                            packsDeleteLock={this.packsDeleteLock}
                            packsCanDelete={this.state.packsCanDelete}
                            shipsDeleteLock={this.shipsDeleteLock}
                            shipsCanDelete={this.state.shipsCanDelete}
                            itemsDeleteLock={this.itemsDeleteLock}
                            itemsCanDelete={this.state.itemsCanDelete}
                            ccusDeleteLock={this.ccusDeleteLock}
                            ccusCanDelete={this.state.ccusCanDelete}
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
