import React, { Component } from 'react'
import HideButton from '../Generic/HideButton'
import shipSeed from '../../logicControl/shipSeed'
import manuSeed from '../../logicControl/manuSeed'

class AddShipForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestedShips: [],
            showShips: true,
            suggestedManus: [],
            showManus: true,
            shipNameField: '',
            manuNameField: '',
            priceField: '',
            skinField: '',
            defaultPrice: 0,
            selectedShip: { id: 0 },
            selectedManu: { id: 0 },
            sizeValue: 'Size...',
            roleValue: 'Role...',
            hangarSelected: false,
            sizeSelected: false,
            roleSelected: false,
        }
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.suggestShipNames = this.suggestShipNames.bind(this)
        this.renderSuggestedShipNames = this.renderSuggestedShipNames.bind(this)
        this.renderSuggestedManufacturers = this.renderSuggestedManufacturers.bind(
            this
        )
        this.showSuggestedShips = this.showSuggestedShips.bind(this)
        this.hideSuggestedShips = this.hideSuggestedShips.bind(this)
        this.showSuggestedManus = this.showSuggestedManus.bind(this)
        this.hideSuggestedManus = this.hideSuggestedManus.bind(this)
        this.hangarChange = this.hangarChange.bind(this)
        this.sizeChange = this.sizeChange.bind(this)
        this.roleChange = this.roleChange.bind(this)
        this.handleSkinChange = this.handleSkinChange.bind(this)

        this.suggestManufacturers = this.suggestManufacturers.bind(this)
        this.selectSuggestedShip = this.selectSuggestedShip.bind(this)
        this.selectSuggestedManufacturer = this.selectSuggestedManufacturer.bind(
            this
        )
        this.addNewShipToHangar = this.addNewShipToHangar.bind(this)
        this.resetShipAddForm = this.resetShipAddForm.bind(this)
        this.formId = `${this.props.name}AddForm`
        this.shipSeed = shipSeed
        this.manuSeed = manuSeed
        this.nickNames = {}
        for (let manu of manuSeed) {
            this.nickNames[manu.name] = manu.nickName
        }

        this.roleNames = {}
        for (let ship of shipSeed) {
            if (ship.role.length > 0) {
                this.roleNames[ship.role] = ship.role
            }
        }
        this.roleSeed = Object.values(this.roleNames).sort()
    }

    hangarChange(e) {
        const value = e.target.value
        if (value !== 'Hangar...') {
            this.setState({ hangarSelected: true })
        } else {
            this.setState({ hangarSelected: false })
        }
    }
    sizeChange(e) {
        const value = e.target.value
        if (value !== 'Size...') {
            this.setState({ sizeSelected: true, sizeValue: value })
        } else {
            this.setState({ sizeSelected: false, roleValue: 'Size...' })
        }
    }

    roleChange(e) {
        const value = e.target.value
        if (value !== 'Role...') {
            this.setState({ roleSelected: true, roleValue: value })
        } else {
            this.setState({ roleSelected: false, roleValue: 'Role...' })
        }
    }
    handleSkinChange(e) {
        e.preventDefault()

        const value = e.target.value
        this.setState({ skinField: value })
    }
    handlePriceChange(e) {
        const value = e.target.value

        if (parseInt(value) >= 0) {
            this.setState({ priceField: value })
        } else {
            this.setState({ priceField: '' })
        }
    }
    suggestManufacturers(e) {
        const value = e.target.value
        const lcValue = value.toLowerCase()
        let suggestedManus = []
        if (value.length > 0) {
            const has = new RegExp(`${lcValue}`, 'i')
            const startsWith = new RegExp(`^${lcValue}`, 'i')
            suggestedManus = this.manuSeed
                .sort()
                .filter((v) => startsWith.test(v.name) || has.test(v.nickName))
        }
        this.setState({
            manuNameField: value,
            suggestedManus: suggestedManus,
            selectedManu: { id: 0 },
        })
    }

    suggestShipNames(e) {
        const value = e.target.value
        const lcValue = value.toLowerCase()

        let suggestedShips = []
        let shipList = []
        if (this.state.selectedManu.id > 0) {
            shipList = this.shipSeed.filter(
                (ship) => ship.manufacturer === this.state.selectedManu.name
            )
        } else {
            shipList = this.shipSeed
        }
        if (value.length > 0) {
            const has = new RegExp(`${lcValue}`, 'i')
            const startsWith = new RegExp(`^${lcValue}`, 'i')
            suggestedShips = shipList
                .sort()
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
            defaultPrice: '',
            roleValue: 'Role...',
            roleSelected: false,
            sizeSelected: false,
            sizeValue: 'Size...',
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

    renderSuggestedManufacturers() {
        const { suggestedManus } = this.state
        if (suggestedManus.length === 0) {
            return null
        }
        return (
            <div style={{ maxHeight: '150px' }} className="overflow-auto">
                <ul className="list-group-sm ">
                    {suggestedManus.map((item, i) => (
                        <li
                            className="btn btn-secondary dropdown-item bg-dark text-light"
                            onClick={() => {
                                this.selectSuggestedManufacturer(item)
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
    hideSuggestedShips() {
        setTimeout(() => {
            this.setState({ showShips: false })
        }, 150)
    }
    showSuggestedShips() {
        this.setState({ showShips: true })
    }
    hideSuggestedManus() {
        setTimeout(() => {
            this.setState({ showManus: false })
        }, 150)
    }
    showSuggestedManus() {
        this.setState({ showManus: true })
    }

    selectSuggestedShip(ship) {
        this.setState({
            shipNameField: ship.name,
            selectedShip: ship,
            suggestedShips: [],
            manuNameField: ship.manufacturer,
            defaultPrice: ship.defaultPrice,
            roleValue: ship.role,
            sizeValue: ship.size,
            roleSelected: true,
            sizeSelected: true,
        })
        //get id from db and fill in rest of fields based on db
    }

    selectSuggestedManufacturer(manu) {
        this.setState({
            manuNameField: manu.name,
            selectedManu: manu,
            suggestedManus: [],
        })
    }

    addNewShipToHangar(e) {
        e.preventDefault()
        e.persist()
        this.props.addNewShipToHangar(e)
        this.resetShipAddForm()
        document.getElementById(this.formId).reset()
    }

    resetShipAddForm() {
        this.setState({
            suggestedShips: [],
            showShips: true,
            suggestedManus: [],
            showManus: true,
            shipNameField: '',
            manuNameField: '',
            priceField: '',
            skinField: '',
            defaultPrice: 0,
            selectedShip: { id: 0 },
            selectedManu: { id: 0 },
            hangarSelected: false,
            sizeSelected: false,
            roleSelected: false,
            sizeValue: 'Size...',
            roleValue: 'Role...',
        })
    }

    render() {
        const filled = 'bg-dark text-white'
        const empty = 'bg-dark'
        const shipSuggestions = this.renderSuggestedShipNames()
        const manuSuggestions = this.renderSuggestedManufacturers()
        const filledInName =
            this.state.shipNameField.length > 0 ? filled : empty
        const filledInManu =
            this.state.manuNameField.length > 0 ? filled : empty
        const filledInPrice = this.state.priceField.length > 0 ? filled : empty
        const filledInHangar = this.state.hangarSelected
            ? filled
            : `${empty} text-secondary`
        const filledInSkin = this.state.skinField.length > 0 ? filled : empty
        const filledInSize = this.state.sizeSelected
            ? filled
            : `${empty} text-secondary`
        const filledInRole = this.state.roleSelected
            ? filled
            : `${empty} text-secondary`
        const pricePlaceholder =
            this.state.defaultPrice > 0 ? `${this.state.defaultPrice}` : 'Price'

        const collapseId = `${this.props.name}FormCollapse`
        const collapseTarget = `#${this.props.name}FormCollapse`
        const roleOptions = this.roleSeed.map((role, i) => {
            return (
                <option key={i} className="bg-dark text-light">
                    {role}
                </option>
            )
        })
        return (
            <div
                className="card border border-secondary collapse bg-dark text-light"
                id={collapseId}
            >
                <div className="card-body">
                    <form onSubmit={this.addNewShipToHangar} id={this.formId}>
                        {/* <div className="form-group row"> */}
                        {/* <div className="col-auto"> */}
                        <div className="form-row">
                            <div className="card bg-secondary font-weight-bold text-dark col-auto border-dark mb-3 col">
                                <div className="card-title border-bottom border-dark">
                                    Info
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={`form-control ${filledInName} mb-1`}
                                        id="inputShipName"
                                        onChange={this.suggestShipNames}
                                        value={this.state.shipNameField}
                                        autoComplete="off"
                                        placeholder="Name"
                                        onBlur={this.hideSuggestedShips}
                                        onFocus={this.showSuggestedShips}
                                    />
                                    {this.state.showShips
                                        ? shipSuggestions
                                        : ''}

                                    <input
                                        type="text"
                                        className={`form-control ${filledInPrice} mb-1`}
                                        id="inputShipPrice"
                                        placeholder={pricePlaceholder}
                                        onChange={this.handlePriceChange}
                                        value={this.state.priceField}
                                        autoComplete="off"
                                    />

                                    <input
                                        type="text"
                                        className={`form-control ${filledInManu} mb-3`}
                                        id="inputShipManufacturer"
                                        placeholder="Manufacturer"
                                        autoComplete="off"
                                        onChange={this.suggestManufacturers}
                                        value={this.state.manuNameField}
                                        onBlur={this.hideSuggestedManus}
                                        onFocus={this.showSuggestedManus}
                                    />
                                    {this.state.showManus
                                        ? manuSuggestions
                                        : ''}
                                </div>
                                <div className="form-group">
                                    <select
                                        className={`form-control ${filledInSize} mb-1`}
                                        id="hangarInfoSelectSize"
                                        onChange={this.sizeChange}
                                        value={this.state.sizeValue}
                                    >
                                        <option className="bg-dark text-secondary">
                                            Size...
                                        </option>
                                        <option className="bg-dark text-light">
                                            Snub
                                        </option>
                                        <option className="bg-dark text-light">
                                            Small
                                        </option>
                                        <option className="bg-dark text-light">
                                            Medium
                                        </option>
                                        <option className="bg-dark text-light">
                                            Large
                                        </option>
                                        <option className="bg-dark text-light">
                                            Capital
                                        </option>
                                    </select>
                                    <select
                                        className={`form-control ${filledInRole} mb-1`}
                                        id="hangarInfoSelectRole"
                                        onChange={this.roleChange}
                                        value={this.state.roleValue}
                                    >
                                        <option className="bg-dark text-secondary">
                                            Role...
                                        </option>
                                        {roleOptions}
                                    </select>
                                </div>
                            </div>
                            {/* </div> */}
                            {/* <div className="col-auto"> */}
                            <div className="card bg-secondary font-weight-bold text-dark border-dark col-auto mb-3 col">
                                <div className="card-title border-bottom border-dark">
                                    Extras
                                </div>

                                <select
                                    className={`form-control ${filledInHangar} mb-1`}
                                    id="hangarExtraSelectShip"
                                    onChange={this.hangarChange}
                                >
                                    <option className="bg-dark text-secondary">
                                        Hangar...
                                    </option>
                                    <option className="bg-dark text-light">
                                        VFG Industrial
                                    </option>
                                    <option className="bg-dark text-light">
                                        Revel and York
                                    </option>
                                    <option className="bg-dark text-light">
                                        AeroView
                                    </option>
                                    <option className="bg-dark text-light">
                                        Self-Land
                                    </option>
                                </select>

                                <input
                                    type="text"
                                    className={`form-control ${filledInSkin} mb-1`}
                                    id="inputShipSkin"
                                    placeholder="Skin"
                                    onChange={this.handleSkinChange}
                                    value={this.state.skinField}
                                    autoComplete="off"
                                />

                                <div className="mb-2 form-check-inline">
                                    <input
                                        className="form-check-input mr-2"
                                        type="checkbox"
                                        id="LTIcheckShip"
                                        name="LTI"
                                    />
                                    <label
                                        className="form-check-label font-weight-bold text-dark"
                                        htmlFor="LTIcheck"
                                    >
                                        LTI
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                        <div className="form-row">
                            <button
                                type="submit"
                                className="btn btn-secondary ml-1"
                            >
                                Create Ship
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-light ml-1"
                                onClick={(e) => {
                                    this.resetShipAddForm()
                                    document.getElementById(this.formId).reset()
                                }}
                            >
                                Reset
                            </button>
                        </div>
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

export default AddShipForm
