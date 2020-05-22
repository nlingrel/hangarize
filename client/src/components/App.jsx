import React, { Component } from 'react'
import ActualHangar from './ActualHangar'
import NavBar from './NavBar'
import Home from './Home'
import Hangarize from './Hangarize'
import Factory from '../logicControl/objectFactory'
import shipSeed from '../logicControl/shipSeed'
import db from '../logicControl/db'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userShips: [],
            userItems: [],
            userManufacturers: [],
            packsPlaceHolder: [
                {
                    _id: 0,
                    name: 'Pack 1',
                    price: 0,
                    ships: [
                        { _id: 0, name: 'Ship 1', price: 0 },
                        { _id: 1, name: 'Ship 2', price: 0 },
                        { _id: 2, name: 'Ship 1', price: 0 },
                    ],
                    items: [
                        { _id: 0, name: 'LTI' },
                        { name: 'self-land hangar' },
                    ],
                },
            ],
            shipsPlaceholder: [{ _id: 0, name: 'Ship 1', price: 0 }],
            ccusPlaceHolder: [
                {
                    _id: 0,
                    name: 'CCU 1',
                    price: 0,
                    base: { name: 'Ship 1', price: 0 },
                    upgrade: { name: 'Ship 2', price: 0 },
                },
                {
                    _id: 1,
                    name: 'CCU 2',
                    price: 0,
                    base: { name: 'Ship 2', price: 0 },
                    upgrade: { name: 'Ship 4', price: 0 },
                },
            ],
            suggestedShips: [],
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
        this.selectShipName = this.selectShipName.bind(this)
        this.Factory = new Factory()
        this.shipSeed = shipSeed
    }

    componentDidMount() {}

    suggestShipNames(e) {
        const value = e.target.value
        let suggestedShips = []
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            suggestedShips = this.shipSeed
                .sort()
                .filter((v) => regex.test(v.name) || regex.test(v.manufacturer))
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
                    {suggestedShips.map((item) => (
                        <li
                            className="btn-light dropdown-item"
                            onClick={() => {
                                this.selectShipName(item.name)
                            }}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    selectShipName(name) {
        console.log(name)
        this.setState({ shipNameField: name, suggestedShips: [] })
    }

    addNewPackToHangar(e) {
        e.preventDefault()
        e.persist()
        let name = e.target[0].value
        let price = parseInt(e.target[1].value)
        let items = []
        for (var i = 2; i < 5; i++) {
            if (e.target[i].checked) {
                items.push({ name: e.target[i].name })
            }
        }
        if (e.target[5].value !== 'Choose...') {
            items.push({ name: e.target[5].value + ' hangar' })
        }
        if (parseInt(e.target[6].value) > 0) {
            items.push({ name: e.target[6].value + ' UEC' })
        }

        let pack = this.Factory.newPack(name, price, [], items)
        let packs = [...this.state.actualPacks, pack]

        this.setState({ actualPacks: packs })
        e.target.reset()
    }

    addNewShipToHangar(e) {
        e.preventDefault()
        e.persist()

        let name = e.target[0].value
        let price = parseInt(e.target[1].value)
        let items = []
        if (e.target[2].checked) {
            items.push({ name: e.target[2].name })
        }
        if (e.target[3].value !== 'Choose...') {
            items.push({ name: e.target[3].value + ' hangar' })
        }
        if (e.target[4].value !== '') {
            items.push({ name: e.target[4].value + ' Skin' })
        }
        let ship = this.Factory.newShip(name, price, items)
        let ships = [...this.state.actualShips, ship]

        console.log(ships)
        this.setState({ actualShips: ships, shipNameField: '' })
        e.target.reset()
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
                <div>
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
