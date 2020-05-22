import React, { Component } from 'react'
import ActualHangar from './ActualHangar'
import NavBar from './NavBar'
import Home from './Home'
import Hangarize from './Hangarize'
import Factory from '../logicControl/objectFactory'
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
                    name: 'Pack 1',
                    price: 0,
                    ships: [{ name: 'Ship 1', price: 0 }],
                    items: [{ name: 'LTI' }, { name: 'self-land hangar' }],
                },
            ],
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

        this.Factory = new Factory()
    }

    componentDidMount() {}

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
                            addNewPackToHangar={this.addNewPackToHangar}
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
