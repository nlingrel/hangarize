import React, { Component } from 'react'

class ActualBuyback extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buyback: this.props.buyback,
        }
    }

    render() {
        return <>buyback</>
    }
}

export default ActualBuyback
