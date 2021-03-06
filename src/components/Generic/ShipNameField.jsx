import React, { Component } from 'react'
import shipSeed from '../../logicControl/shipSeed'
import manuSeed from '../../logicControl/manuSeed'

class ShipNameField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shipNameField: '',
            suggestedShips: [],
            selectedShip: { id: 0 },
        }
        this.shipSeed = shipSeed
        this.nickNames = {}
        for (let manu of manuSeed) {
            this.nickNames[manu.name] = manu.nickName
        }
        this.suggestShipNames = this.suggestShipNames.bind(this)
        this.addShipToPack = this.addShipToPack.bind(this)
    }

    componentDidMount() {}

    suggestShipNames(e) {
        const value = e.target.value
        const lcValue = value.toLowerCase()

        let suggestedShips = []
        if (value.length > 0) {
            const has = new RegExp(`${lcValue}`, 'i')
            const startsWith = new RegExp(`^${lcValue}`, 'i')
            suggestedShips = this.shipSeed
                .sort((a, b) => a.defaultPrice - b.defaultPrice)
                .filter(
                    (v) =>
                        has.test(v.name) ||
                        has.test(v.manufacturer) ||
                        startsWith.test(this.nickNames[v.manufacturer])
                )
        }

        this.setState({
            suggestedShips: suggestedShips,
            shipNameField: value,
            selectedShip: { id: 0 },
        })
    }

    renderSuggestedShipNames() {
        const { suggestedShips } = this.state
        if (suggestedShips.length === 0) {
            return null
        }
        return (
            <div style={{ maxHeight: '150px' }} className="overflow-auto">
                <ul className="list-group">
                    {suggestedShips.map((item, i) => (
                        <li
                            className="btn btn-secondary dropdown-item bg-dark text-light"
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
        this.setState(
            {
                shipNameField: ship.name,
                selectedShip: ship,
                suggestedShips: [],
            },
            () => {
                this.addShipToPack()
            }
        )

        //get id from db and fill in rest of fields based on db
    }

    addShipToPack(e) {
        if (e) {
            e.preventDefault()
        }
        const packId = this.props.packId
        const selectedShip = this.state.selectedShip
        const shipNameField = this.state.shipNameField

        this.props.addShipToPack(packId, selectedShip, shipNameField)

        this.setState({ shipNameField: '', suggestedShips: [] })
    }

    render() {
        const suggestions = this.renderSuggestedShipNames()
        const inputId = `Pack${this.props.packId}inputShipName`
        return (
            <>
                <div className="form-group m-0">
                    {' '}
                    <form onSubmit={this.addShipToPack} className="m-0">
                        <div className="input-group input-group-sm flex-nowrap">
                            <input
                                type="text"
                                placeholder={this.props.placeholder}
                                className={this.props.className}
                                style={{ color: 'white' }}
                                // id={inputId}
                                autoComplete="off"
                                onChange={this.suggestShipNames}
                                value={this.state.shipNameField}
                            />

                            <div className="input-group-append">
                                <button
                                    type="button"
                                    className="btn btn-success btn-sm font-weight-bold"
                                    onClick={this.addShipToPack}
                                    title="Add Ship"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </form>
                    {suggestions}
                </div>
            </>
        )
    }
}

export default ShipNameField
