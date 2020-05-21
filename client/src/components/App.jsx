import React, { Component } from 'react'
import ActualHangar from './ActualHangar'
import NavBar from './NavBar'
import Home from './Home'
import db from '../logicControl/db'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userShips: [],
            userItems: [],
            userManufacturers: [],
            currentView: 'home',
            views: { home: 'home', actual: 'actual', hangarize: 'hangarize' },
        }
        this.navToActual = this.navToActual.bind(this)
        this.navToHangarize = this.navToHangarize.bind(this)
        this.navToHome = this.navToHome.bind(this)
    }

    componentDidMount() {}

    navToActual(e) {
        e.preventDefault()
        this.setState({ currentView: 'actual' })
        console.log('navToActual was clicked')
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
                    ) : (
                        ''
                    )}
                </div>
            </>
        )
    }
}

export default App
