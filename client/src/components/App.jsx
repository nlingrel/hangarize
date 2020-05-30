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
    seedManus,
    seedShips,
    dbPutShip,
    dbGetUserShip,
    dbGetPack,
    dbPutPack,
    dbUpdatePack,
    dbGetAllUserPacks,
    dbGetAllUserShips,
} from '../logicControl/db'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userShips: [],
            userItems: [],
            userManufacturers: [],
            packsPlaceHolder: [
                {
                    id: 0,
                    name: 'Pack 1',
                    price: 0,
                    ships: [
                        {
                            id: 0,
                            name: '315p',
                            price: 65,
                            manu: 'Origin',
                            role: 'Pathfinder',
                            size: 'small',
                            items: [],
                        },
                        {
                            id: 1,
                            name: 'DUR',
                            price: 135,
                            manu: 'MISC',
                            role: 'Exploration',
                            size: 'medium',
                            items: [],
                        },
                        {
                            id: 2,
                            name: 'Aurora LN',
                            price: 40,
                            manu: 'RSI',
                            role: 'Fighter',
                            size: 'small',
                            items: [],
                        },
                    ],
                    items: [
                        { id: 0, name: 'LTI' },
                        { name: 'self-land hangar' },
                    ],
                },
            ],
            shipsPlaceholder: [
                {
                    id: 0,
                    name: 'Ship 1',
                    price: 0,
                    manu: 'Aegis',
                    role: 'Role 1',
                    size: 'small',
                    items: [],
                },
            ],
            ccusPlaceHolder: [
                {
                    id: 0,
                    name: 'CCU 1',
                    price: 0,
                    base: { name: 'Ship 1', price: 0 },
                    upgrade: { name: 'Ship 2', price: 0 },
                },
                {
                    id: 1,
                    name: 'CCU 2',
                    price: 0,
                    base: { name: 'Ship 2', price: 0 },
                    upgrade: { name: 'Ship 4', price: 0 },
                },
            ],
            suggestedShips: [],
            selectedShip: {},
            actualPacks: [],
            actualShips: [],
            actualCCUs: [],
            actualItems: [],
            currentView: 'home',
            views: { home: 'home', actual: 'actual', hangarize: 'hangarize' },
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
        console.log(this.nickNames)

        this.db = db
    }

    componentDidMount() {
        this.db.open().catch((err) => {
            console.log('Error opening database')
        })
        seedManus()
        seedShips()
        dbGetAllUserPacks()
            .then((array) => {
                this.setState({ actualPacks: array })
            })
            .catch((err) => {
                console.log('Error getting all packs', err)
            })
        dbGetAllUserShips()
            .then((array) => {
                this.setState({ actualShips: array })
            })
            .catch((err) => {
                console.log('Error getting all ships', err)
            })
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

        dbPutPack(pack)
            .then(() => {
                let packs = [...this.state.actualPacks, pack]
                this.setState({ actualPacks: packs })
            })
            .catch((err) => {
                console.log('Error saving pack', err)
            })

        e.target.reset()
    }

    addShipToPack(packId, shipId) {
        // const shipId = shipId
        // const packId = packId
        let packShips = []
        let movedShip = {}
        let isError = false
        console.log(shipId)

        // get pack so you can get pack's ships
        Promise.all([
            dbGetPack(packId).then((pack) => {
                packShips = pack.ships
                console.log('packShips===>', packShips)
            }),
            dbGetUserShip(shipId).then((ship) => {
                movedShip = ship
                console.log('ship===>', movedShip)
            }),
        ])
            .then(() => {
                packShips.push(movedShip)
                Promise.all([
                    dbUpdatePack(packId, { ships: packShips }).then(() => {
                        console.log('Pack ships updated')
                    }),
                ]).then(() => {
                    dbGetAllUserPacks().then((array) => {
                        this.setState({ actualPacks: array })
                    })
                })
            })
            .catch((err) => {
                console.log('Error on getting pack & ship', err)
                isError = true
            })

        // .catch((err) => {
        //     console.log('Error on updating pack', err)
        //     isError = true
        // })
        // .then((ship) => {
        //     movedShip = ship
        // })
        // .then(packShips.push(movedShip))
        //     .catch((err) => {
        //         console.log('Error on getting ship', err)
        //         isError = true
        //     })

        // get ship
        // push ship into pack's ships
        // update pack's ships with new ships array
        // remove ship from userShips
        // setState
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
                let ships = [...this.state.actualShips, ship]
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
        let packs =
            this.state.actualPacks.length > 0
                ? this.state.actualPacks
                : this.state.packsPlaceHolder
        let ships =
            this.state.actualShips.length > 0
                ? this.state.actualShips
                : this.state.shipsPlaceholder
        let ccus =
            this.state.actualCCUs.length > 0
                ? this.state.actualCCUs
                : this.state.ccusPlaceHolder
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
