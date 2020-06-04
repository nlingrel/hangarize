import React, { Component } from 'react'
import HideButton from '../Generic/HideButton'
import shipSeed from '../../logicControl/shipSeed'
import manuSeed from '../../logicControl/manuSeed'

class AddCCUForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            baseField: '',
            toField: '',
            priceField: '',
            suggestedBases: [],
            suggestedTos: [],
            selectedBase: { id: 0 },
            basePrice: 0,
            toPrice: 0,
            defaultPrice: 0,
            selectedTo: { jid: 0 },
            showSuggestedBases: true,
            showSuggestedTos: true,
        }
        this.suggestBaseNames = this.suggestBaseNames.bind(this)
        this.renderSuggestedBaseNames = this.renderSuggestedBaseNames.bind(this)
        this.selectSuggestedBase = this.selectSuggestedBase.bind(this)
        this.hideSuggestedBases = this.hideSuggestedBases.bind(this)
        this.showSuggestedBases = this.showSuggestedBases.bind(this)

        this.suggestToNames = this.suggestToNames.bind(this)
        this.renderSuggestedToNames = this.renderSuggestedToNames.bind(this)
        this.selectSuggestedTo = this.selectSuggestedTo.bind(this)
        this.hideSuggestedTos = this.hideSuggestedTos.bind(this)
        this.showSuggestedTos = this.showSuggestedTos.bind(this)

        this.priceChange = this.priceChange.bind(this)

        this.addNewCCUToHangar = this.addNewCCUToHangar.bind(this)
        this.resetForm = this.resetForm.bind(this)
        this.formId = `${this.props.name}AddForm`
        this.shipSeed = shipSeed
        this.manuSeed = manuSeed
        this.nickNames = {}
        for (let manu of manuSeed) {
            this.nickNames[manu.name] = manu.nickName
        }
    }

    suggestBaseNames(e) {
        const value = e.target.value
        const lcValue = value.toLowerCase()

        let suggestedShips = []

        if (value.length > 0) {
            const has = new RegExp(`${lcValue}`, 'i')
            const startsWith = new RegExp(`^${lcValue}`, 'i')
            suggestedShips = this.shipSeed
                .sort()
                .filter(
                    (v) =>
                        has.test(v.name) ||
                        has.test(v.manufacturer) ||
                        startsWith.test(this.nickNames[v.manufacturer])
                )
        }

        this.setState({
            suggestedBases: suggestedShips,
            selectedBase: { id: 0 },
            basePrice: 0,
            baseField: value,
            defaultPrice: 0,
        })
    }

    renderSuggestedBaseNames() {
        const { suggestedBases } = this.state

        if (suggestedBases.length === 0) {
            return null
        }
        return (
            <div style={{ maxHeight: '150px' }} className="overflow-auto">
                <ul className="list-group ">
                    {suggestedBases.map((item, i) => (
                        <option
                            className="btn btn-secondary dropdown-item bg-dark text-light"
                            onClick={() => {
                                this.selectSuggestedBase(item)
                            }}
                            key={i}
                        >
                            {item.name}
                        </option>
                    ))}
                </ul>
            </div>
        )
    }
    selectSuggestedBase(ship) {
        const basePrice = ship.defaultPrice
        let defaultPrice = 0
        if (this.state.selectedTo.id > 0) {
            defaultPrice = this.state.selectedTo.defaultPrice - basePrice
        }
        this.setState({
            baseField: ship.name,
            selectedBase: ship,
            basePrice: ship.price,
            suggestedBases: [],
            defaultPrice: defaultPrice,
        })
    }

    hideSuggestedBases() {
        setTimeout(() => {
            this.setState({ showSuggestedBases: false })
        }, 150)
    }

    showSuggestedBases() {
        this.setState({ showSuggestedBases: true })
    }

    suggestToNames(e) {
        const value = e.target.value
        const lcValue = value.toLowerCase()

        let suggestedShips = []

        if (value.length > 0) {
            const has = new RegExp(`${lcValue}`, 'i')
            const startsWith = new RegExp(`^${lcValue}`, 'i')
            suggestedShips = this.shipSeed
                .sort()
                .filter(
                    (v) =>
                        has.test(v.name) ||
                        has.test(v.manufacturer) ||
                        startsWith.test(this.nickNames[v.manufacturer])
                )
        }

        this.setState({
            suggestedTos: suggestedShips,
            selectedTo: { id: 0 },
            toField: value,
            defaultPrice: 0,
            toPrice: 0,
        })
    }

    renderSuggestedToNames() {
        const { suggestedTos } = this.state

        if (suggestedTos.length === 0) {
            return null
        }
        return (
            <div style={{ maxHeight: '150px' }} className="overflow-auto">
                <ul className="list-group ">
                    {suggestedTos.map((item, i) => (
                        <option
                            className="btn btn-secondary dropdown-item bg-dark text-light"
                            onClick={() => {
                                this.selectSuggestedTo(item)
                            }}
                            key={i}
                        >
                            {item.name}
                        </option>
                    ))}
                </ul>
            </div>
        )
    }
    selectSuggestedTo(ship) {
        const toPrice = ship.defaultPrice
        let defaultPrice = 0
        if (this.state.selectedBase.id > 0) {
            defaultPrice = toPrice - this.state.selectedBase.defaultPrice
        }
        this.setState({
            toField: ship.name,
            selectedTo: ship,
            toPrice: ship.price,
            suggestedTos: [],
            defaultPrice: defaultPrice,
        })
    }

    hideSuggestedTos() {
        setTimeout(() => {
            this.setState({ showSuggestedTos: false })
        }, 150)
    }

    showSuggestedTos() {
        this.setState({ showSuggestedTos: true })
    }

    priceChange(e) {
        const value = e.target.value

        if (parseInt(value) >= 0) {
            this.setState({ priceField: value })
        } else {
            this.setState({ priceField: '' })
        }
    }

    addNewCCUToHangar(e) {
        e.preventDefault()
        e.persist()

        this.props.addNewCCUToHangar(e)
        this.resetForm()
    }

    resetForm() {
        this.setState({
            baseField: '',
            toField: '',
            priceField: '',
            suggestedBases: [],
            suggestedTos: [],
            selectedBase: { id: 0 },
            basePrice: 0,
            toPrice: 0,
            defaultPrice: 0,
            selectedTo: { jid: 0 },
            showSuggestedBases: true,
            showSuggestedTos: true,
        })
        document.getElementById(this.formId).reset()
    }

    render() {
        const collapseId = `${this.props.name}FormCollapse`
        const collapseTarget = `#${this.props.name}FormCollapse`

        const baseSuggestions = this.renderSuggestedBaseNames()
        const toSuggestions = this.renderSuggestedToNames()

        const filled = 'bg-dark text-white'
        const empty = 'bg-dark'

        const baseFilled = this.state.baseField.length > 0 ? filled : empty
        const toFilled = this.state.toField.length > 0 ? filled : empty
        const priceFilled = this.state.priceField.length > 0 ? filled : empty

        const pricePlaceholder =
            this.state.defaultPrice > 0
                ? `$${this.state.defaultPrice}`
                : 'Price'

        return (
            <div
                className="card border border-secondary collapse bg-dark text-light"
                id={collapseId}
            >
                <div className="card-body">
                    <form onSubmit={this.addNewCCUToHangar} id={this.formId}>
                        <div className="form-row mb-3">
                            <div className="card bg-secondary font-weight-bold text-dark col-auto border-dark p-2 ">
                                <div className="card-title border-bottom border-dark">
                                    Info
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={`form-control ${baseFilled} mb-1`}
                                        id="inputBaseName"
                                        autoComplete="off"
                                        placeholder="Base"
                                        onChange={this.suggestBaseNames}
                                        value={this.state.baseField}
                                        onBlur={this.hideSuggestedBases}
                                        onFocus={this.showSuggestedBases}
                                        autoComplete="off"
                                    />
                                    {this.state.showSuggestedBases
                                        ? baseSuggestions
                                        : ''}
                                    <input
                                        type="text"
                                        className={`form-control ${toFilled} mb-1`}
                                        id="inputToName"
                                        autoComplete="off"
                                        placeholder="To"
                                        onChange={this.suggestToNames}
                                        value={this.state.toField}
                                        onBlur={this.hideSuggestedTos}
                                        onFocus={this.showSuggestedTos}
                                        autoComplete="off"
                                    />
                                    {this.state.showSuggestedTos
                                        ? toSuggestions
                                        : ''}
                                    <input
                                        type="text"
                                        className={`form-control ${priceFilled} mb-1`}
                                        id="inputCCUPrice"
                                        placeholder={pricePlaceholder}
                                        onChange={this.priceChange}
                                        value={this.state.priceField}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-secondary ml-1"
                        >
                            Create Item
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-light ml-1"
                            onClick={this.resetForm}
                        >
                            Reset
                        </button>
                    </form>
                </div>
                <div className="card-footer">
                    <HideButton
                        dataTarget={collapseTarget}
                        classes={['btn-block']}
                    />
                </div>
            </div>
        )
    }
}

export default AddCCUForm
