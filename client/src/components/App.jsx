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
    dbPutHangar,
    dbPutActualHangar,
    dbUpdateHangar,
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
            shipNameField: '',
            actualHangar: {},
            suggestedShips: [],
            selectedShip: {},
            currentView: 'home',
            views: { home: 'home', actual: 'actual', hangarize: 'hangarize' },
            currentHangarId: 1,
        }
        this.navToActual = this.navToActual.bind(this)
        this.navToHangarize = this.navToHangarize.bind(this)
        this.navToHome = this.navToHome.bind(this)
        this.addNewPackToHangar = this.addNewPackToHangar.bind(this)
        this.addNewShipToHangar = this.addNewShipToHangar.bind(this)
        this.suggestShipNames = this.suggestShipNames.bind(this)
        this.renderSuggestedShipNames = this.renderSuggestedShipNames.bind(this)
        this.selectSuggestedShip = this.selectSuggestedShip.bind(this)
        this.acceptShipInputForPack = this.acceptShipInputForPack.bind(this)
        this.resetShipAddForm = this.resetShipAddForm.bind(this)
        this.addShipToPack = this.addShipToPack.bind(this)
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

    suggestShipNames(e) {
        const value = e.target.value.toLowerCase()

        let suggestedShips = []
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            suggestedShips = this.shipSeed
                .sort()
                .filter(
                    (v) =>
                        regex.test(v.name) ||
                        regex.test(v.manufacturer) ||
                        regex.test(this.nickNames[v.manufacturer])
                )
        }

        this.setState({
            suggestedShips: suggestedShips,
            shipNameField: value,
        })
    }

    renderSuggestedShipNames() {
        const { suggestedShips } = this.state
        if (suggestedShips.length === 0) {
            return null
        }
        return (
            <div style={{ maxHeight: '150px' }} className="overflow-auto">
                <ul className="list-group-sm ">
                    {suggestedShips.map((item, i) => (
                        <li
                            className="btn-secondary dropdown-item bg-secondary text-light"
                            onClick={() => {
                                this.selectSuggestedShip(item)
                            }}
                            key={i}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    selectSuggestedShip(ship) {
        this.setState({
            shipNameField: ship.name,
            selectedShip: ship,
            suggestedShips: [],
        })
        //get id from db and fill in rest of fields based on db
    }

    acceptShipInputForPack(e) {
        e.preventDefault()
        console.log(
            'Ship would have been added to list',
            this.state.selectedShip
        )
        this.setState({ selectedShip: {} })
    }

    addNewPackToHangar(e) {
        e.preventDefault()
        e.persist()
        // for (var i = 0; i < e.target.length; i++) {
        //     console.log(`target number ${i}: ${e.target[i].value}`)
        // }
        let name = e.target[0].value
        let price = parseInt(e.target[1].value)
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
        let packShips = []
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
        console.log('New ship to be added to pack', newShip)

        //get pack from id
        //create new ship from shipName
        //spread pack ships adding new ship
        //save pack
        Promise.all([dbPutShip(newShip), dbPutUserPack(packId)])
            .then((results) => {
                newShip.id = results[0]
                packShips = results[1].ships
                console.log(
                    'new Ship created in userShips',
                    newShip,
                    '  pack ships got from pack',
                    packShips
                )
                packShips.push(newShip)
            })
            .then(() => {
                dbUpdatePack(packId, { ships: [...packShips] })
            })
            .then(() => {
                dbGetAllUserPacks().then((array) => {
                    this.setState({ packs: array })
                })
            })

            .catch((err) => {
                console.log('Error trying to add ship to pack', err)
            })
    }

    addNewShipToHangar(e) {
        e.preventDefault()
        e.persist()

        for (var i = 0; i < e.target.length; i++) {
            console.log(`target number ${i}: ${e.target[i].value}`)
        }

        let name = e.target[0].value
        let price = parseInt(e.target[1].value) || 0
        let manufacturer = e.target[2].value || 'Unknown Manufacturer'
        let items = []
        if (e.target[3].value !== 'Hangar...') {
            items.push({ name: e.target[3].value + ' hangar' })
        }
        if (e.target[4].value !== '') {
            items.push({ name: e.target[4].value + ' Skin' })
        }
        if (e.target[5].checked) {
            items.push({ name: e.target[5].name })
        }
        let ship = this.Factory.newShip(name, price, items, manufacturer)

        dbPutShip(ship)
            .then(() => {
                let ships = [...this.state.currentHangar.ships, ship]
                this.setState({ actualShips: ships })
            })
            .catch((err) => {
                console.log('Error saving ship', err)
            })
        e.target.reset()
    }

    resetShipAddForm() {
        this.setState({
            shipNameField: '',
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
                            addNewPackToHangar={this.addNewPackToHangar}
                            addNewShipToHangar={this.addNewShipToHangar}
                            suggestShipNames={this.suggestShipNames}
                            renderSuggestedShipNames={
                                this.renderSuggestedShipNames
                            }
                            shipNameField={this.state.shipNameField}
                            acceptShipInputForPack={this.acceptShipInputForPack}
                            selectedShip={this.state.selectedShip}
                            resetShipAddForm={this.resetShipAddForm}
                            addShipToPack={this.addShipToPack}
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
