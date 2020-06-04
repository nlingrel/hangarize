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
    dbPutHangar,
    dbPutActualHangar,
    dbUpdateHangar,
    dbUpdateShip,
    dbUpdatePack,
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
        }
        this.navToActual = this.navToActual.bind(this)
        this.navToHangarize = this.navToHangarize.bind(this)
        this.navToHome = this.navToHome.bind(this)
        this.addNewPackToHangar = this.addNewPackToHangar.bind(this)
        this.addNewShipToHangar = this.addNewShipToHangar.bind(this)
        this.addNewItemToHangar = this.addNewItemToHangar.bind(this)

        this.addShipToPack = this.addShipToPack.bind(this)
        this.addItemToPack = this.addItemToPack.bind(this)
        this.addItemToShip = this.addItemToShip.bind(this)
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

        dbPutItem(newItem).then((id) => {
            newItem.id = id
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
        if (item.id > 0) {
            newItem = this.Factory.newItem(item.name, item.price, false)
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
            dbPutItem(newItem)
                .then((id) => {
                    newItem.id = id
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
                    ]).then(() => {
                        let hngr = this.state.currentHangar
                        hngr.packs = finalPacks
                        this.setState({ currentHangar: hngr })
                    })
                })

                .catch((err) => {
                    console.log('Error adding item to ship', err)
                })
        } else {
            dbPutItem(newItem)
                .then((id) => {
                    newItem.id = id
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
                    ]).then(() => {
                        let hngr = this.state.currentHangar
                        hngr.ships = finalShips
                        this.setState({ currentHangar: hngr })
                    })
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
                            addNewPackToHangar={this.addNewPackToHangar}
                            addNewShipToHangar={this.addNewShipToHangar}
                            addNewItemToHangar={this.addNewItemToHangar}
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
