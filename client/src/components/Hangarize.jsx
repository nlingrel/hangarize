import React, { Component } from 'react'
import { dbGetAllHangars } from '../logicControl/db'

class Hangarize extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentHangar: {},
            currentBuyback: {},
            hangars: [],
        }
    }

    componentDidMount() {
        dbGetAllHangars()
            .then((hangars) => {
                this.setState({ hangars: hangars })
            })
            .catch((err) => {
                console.log('Error getting all hangars', err)
            })
    }

    render() {
        return <div>This is the Hangarizer</div>
    }
}

export default Hangarize
