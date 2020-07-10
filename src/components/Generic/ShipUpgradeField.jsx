import React, { Component } from 'react'
import shipSeed from '../../logicControl/shipSeed'
import manuSeed from '../../logicControl/manuSeed'
import HideButton from './HideButton'

class ShipUgradeField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestedShips: [],
            shipNameField: '',
            selectedShip: { id: 0 },
            showShips: false,
            priceField: '',
            defaultPrice: 0,
        }

        this.shipSeed = shipSeed
        this.nickNames = {}
        for (let manu of manuSeed) {
            this.nickNames[manu.name] = manu.nickName
        }
        this.suggestShipNames = this.suggestShipNames.bind(this)
        this.hideSuggestedShips = this.hideSuggestedShips.bind(this)
        this.showSuggestedShips = this.showSuggestedShips.bind(this)
        this.resetUpgradeForm = this.resetUpgradeForm.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.upgradeShip = this.upgradeShip.bind(this)

        this.formId = `upgradeShipForm${this.props.shipId}`
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
                defaultPrice: ship.defaultPrice,
            }
            // () => {
            //     this.addShipToPack()
            // }
        )

        //get id from db and fill in rest of fields based on db
    }

    hideSuggestedShips() {
        setTimeout(() => {
            this.setState({ showShips: false })
        }, 150)
    }
    showSuggestedShips() {
        this.setState({ showShips: true })
    }

    resetUpgradeForm() {
        this.setState({
            suggestedShips: [],
            shipNameField: '',
            selectedShip: { id: 0 },
            showShips: false,
            priceField: '',
        })
    }
    handlePriceChange(e) {
        const value = e.target.value

        if (parseInt(value) >= 0) {
            this.setState({ priceField: value })
        } else {
            this.setState({ priceField: 0 })
        }
    }
    upgradeShip(e) {
        e.preventDefault()
        const shipName = this.state.shipNameField
        if (shipName.length === 0) {
            return null
        }
        const shipId = this.props.shipId
        const tPrice = this.props.toPrice
        const basePrice = this.props.price
        const priceInt = parseInt(this.state.priceField)
        const newPrice = Number.isNaN(priceInt) ? 0 + tPrice : priceInt + tPrice

        this.props.upgradeShip(shipId, shipName, newPrice, basePrice)
        this.resetUpgradeForm()
        document.getElementById(this.formId).reset()
    }

    render() {
        const collapseId = `upgradeShip${this.props.shipId}`

        const collapeTarget = `#${collapseId}`
        const shipSuggestions = this.renderSuggestedShipNames()
        const filled = 'bg-dark text-white'
        const empty = 'bg-dark'
        const filledInName =
            this.state.shipNameField.length > 0 ? filled : empty
        const filledInPrice = this.state.priceField > 0 ? filled : empty

        return (
            <div className="collapse p-1 bg-dark" id={collapseId}>
                <form onSubmit={this.upgradeShip} id={this.formId}>
                    <div className="form-group input-group-sm flex-nowrap">
                        <div>
                            <input
                                className={`${filledInName} form-control`}
                                type="text"
                                placeholder="Upgrade to.."
                                onChange={this.suggestShipNames}
                                value={this.state.shipNameField}
                                autoComplete="off"
                                onBlur={this.hideSuggestedShips}
                                onFocus={this.showSuggestedShips}
                            />
                            {this.state.showShips ? shipSuggestions : ''}
                        </div>
                        <div>
                            <input
                                type="text"
                                className={`form-control ${filledInPrice} mb-2 col`}
                                // id="inputShipPrice"
                                placeholder="Price"
                                onChange={this.handlePriceChange}
                                value={this.state.priceField}
                                autoComplete="off"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-success btn-sm mb-2"
                            title="Upgrade Ship"
                            data-toggle="collapse"
                            data-target={collapeTarget}
                        >
                            Upgrade
                        </button>
                        <HideButton
                            dataTarget={collapeTarget}
                            classes={['btn-block']}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default ShipUgradeField
