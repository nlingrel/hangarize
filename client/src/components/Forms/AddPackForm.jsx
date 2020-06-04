import React, { Component } from 'react'
import HideButton from '../Generic/HideButton'
import shipSeed from '../../logicControl/shipSeed'

class AddPackForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameField: '',
            priceField: '',
            hangarSelected: false,
            uecField: '',
            ltiSelected: false,
            scGameSelected: false,
            sq42GameSelected: false,
        }
        this.nameChange = this.nameChange.bind(this)
        this.priceChange = this.priceChange.bind(this)
        this.addNewPackToHangar = this.addNewPackToHangar.bind(this)
        this.hangarChange = this.hangarChange.bind(this)
        this.uecChange = this.uecChange.bind(this)
        this.ltiChange = this.ltiChange.bind(this)
        this.scGameChange = this.scGameChange.bind(this)
        this.sq42GameChange = this.sq42GameChange.bind(this)
        this.formId = `${this.props.name}AddForm`
    }

    nameChange(e) {
        const value = e.target.value
        this.setState({ nameField: value })
    }
    priceChange(e) {
        const value = e.target.value

        if (parseInt(value) >= 0) {
            this.setState({ priceField: value })
        } else {
            this.setState({ priceField: '' })
        }
    }
    hangarChange(e) {
        const value = e.target.value
        if (value !== 'Hangar...') {
            this.setState({ hangarSelected: true })
        } else {
            this.setState({ hangarSelected: false })
        }
    }
    uecChange(e) {
        const value = e.target.value
        if (parseInt(value) >= 0) {
            this.setState({ uecField: value })
        } else {
            this.setState({ uecField: '' })
        }
    }
    ltiChange(e) {
        if (e.target.checked) {
            this.setState({ ltiSelected: true })
        } else {
            this.setState({ ltiSelected: false })
        }
    }
    scGameChange(e) {
        if (e.target.checked) {
            this.setState({ scGameSelected: true })
        } else {
            this.setState({ scGameSelected: false })
        }
    }
    sq42GameChange(e) {
        if (e.target.checked) {
            this.setState({ sq42GameSelected: true })
        } else {
            this.setState({ sq42GameSelected: false })
        }
    }
    addNewPackToHangar(e) {
        e.preventDefault()
        this.props.addNewPackToHangar(e)
        this.resetShipAddForm()
        document.getElementById(this.formId).reset()
    }
    resetShipAddForm() {
        this.setState({
            priceField: '',
            nameField: '',
            uecField: '',

            hangarSelected: false,
            scGameSelected: false,
            sq42GameSelected: false,

            ltiSelected: false,
        })
    }
    render() {
        const collapseId = `${this.props.name}FormCollapse`
        const collapseTarget = `#${this.props.name}FormCollapse`
        const filled = 'bg-dark text-white'
        const empty = 'bg-dark'

        const nameFilled = this.state.nameField.length > 0 ? filled : empty
        const priceFilled = this.state.priceField.length > 0 ? filled : empty
        const uecFilled = this.state.uecField.length > 0 ? filled : empty
        const filledInHangar = this.state.hangarSelected
            ? filled
            : `${empty} text-secondary`
        const checkedLTI = this.state.ltiSelected ? 'text-light' : 'text-dark'
        const checkedSCG = this.state.scGameSelected
            ? 'text-light'
            : 'text-dark'
        const checkedS42 = this.state.sq42GameSelected
            ? 'text-light'
            : 'text-dark'

        return (
            <div
                className="card border border-secondary collapse bg-dark text-light"
                id={collapseId}
            >
                <div className="card-body">
                    <form onSubmit={this.addNewPackToHangar} id={this.formId}>
                        <div className="form-row mb-3">
                            <div className="card bg-secondary font-weight-bold text-dark col-auto border-dark p-2 ">
                                <div className="card-title border-bottom border-dark">
                                    Info
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={`form-control ${nameFilled} mb-1`}
                                        id="inputPackName"
                                        autoComplete="off"
                                        onChange={this.nameChange}
                                        placeholder="Name"
                                        value={this.state.nameField}
                                    />

                                    <input
                                        type="text"
                                        className={`form-control ${priceFilled} mb-1`}
                                        id="inputPackPrice"
                                        placeholder="Price"
                                        value={this.state.priceField}
                                        onChange={this.priceChange}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <div className="card bg-secondary font-weight-bold text-dark col-auto border-dark p-2 ">
                                <div className="card-title border-bottom border-dark">
                                    Extras
                                </div>

                                <select
                                    className={`form-control ${filledInHangar} mb-1`}
                                    id="hangarExtraSelectPack"
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
                                    className={`form-control ${uecFilled} mb-1`}
                                    id="inputUEC"
                                    placeholder="UEC"
                                    value={this.state.uecField}
                                    onChange={this.uecChange}
                                    autoComplete="off"
                                />

                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="LTIcheckPack"
                                        name="LTI"
                                        onClick={this.ltiChange}
                                        onBlur={this.ltiChange}
                                    />
                                    <label
                                        className={`form-check-label font-weight-bold ${checkedLTI}`}
                                        htmlFor="LTIcheck"
                                    >
                                        LTI
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="SCGameCheck"
                                        name="SCGame"
                                        onClick={this.scGameChange}
                                        onBlur={this.scGameChange}
                                    />
                                    <label
                                        className={`form-check-label font-weight-bold ${checkedSCG}`}
                                        htmlFor="SCGameCheck"
                                    >
                                        SC Game
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="Sq42GameCheck"
                                        name="Sq42"
                                        onClick={this.sq42GameChange}
                                        onBlur={this.sq42GameChange}
                                    />
                                    <label
                                        className={`form-check-label font-weight-bold ${checkedS42}`}
                                        htmlFor="Sq42GameCheck"
                                    >
                                        Sq42 Game
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <button
                                type="submit"
                                className="btn btn-secondary ml-1"
                            >
                                Create Pack
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

export default AddPackForm
