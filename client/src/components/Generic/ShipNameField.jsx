import React, { Component } from 'react'
import shipSeed from '../../logicControl/shipSeed'
import manuSeed from '../../logicControl/manuSeed'

class ShipNameField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shipNameField: '',
            suggestedShips: [],
            selectedShip: {},
        }
        this.shipSeed = shipSeed
        this.nickNames = {}
        for (let manu of manuSeed) {
            this.nickNames[manu.name] = manu.nickName
        }
        this.suggestShipNames = this.suggestShipNames.bind(this)
    }

    componentDidMount() {}

    suggestShipNames(e) {
        const value = e.target.value
        const lcValue = value.toLowerCase()

        let suggestedShips = []
        if (value.length > 0) {
            const regex = new RegExp(`${lcValue}`, 'i')
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
                            className="btn-secondary dropdown-item bg-dark text-light"
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

    render() {
        const suggestions = this.renderSuggestedShipNames()
        const inputId = `Pack${this.props.packId}inputShipname`
        return (
            <div className="input-group input-group-sm flex-nowrap">
                <input
                    type="text"
                    placeholder={this.props.placeholder}
                    className={this.props.className}
                    style={{ color: 'white' }}
                    id={inputId}
                    autoComplete="off"
                    onChange={this.suggestShipNames}
                    value={this.state.shipNameField}
                />
                {suggestions}

                <div className="input-group-append">
                    <button
                        type="button"
                        className="btn btn-sucess btn-sm ml-1"
                    ></button>
                </div>
            </div>
        )
    }
}

export default ShipNameField