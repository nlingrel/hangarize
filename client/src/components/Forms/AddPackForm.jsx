import React, { Component } from 'react'
import HideButton from '../Generic/HideButton'
import shipSeed from '../../logicControl/shipSeed'

class AddPackForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            packNameField: '',
            suggestedShips: [],
            selectedShip: { id: 0 },
        }
        this.handleChange = this.handleChange.bind(this)
        this.addNewPackToHangar = this.addNewPackToHangar.bind(this)
        this.formId = `${this.props.name}AddForm`
    }

    handleChange(e) {
        e.preventDefault()
        const value = e.target.value
        this.setState({ packNameField: value })
    }
    addNewPackToHangar(e) {
        e.preventDefault()
        this.props.addNewPackToHangar(e)
    }
    render() {
        const collapseId = `${this.props.name}FormCollapse`
        const collapseTarget = `#${this.props.name}FormCollapse`

        return (
            <div
                className="card border border-secondary collapse bg-dark text-light"
                id={collapseId}
            >
                <div className="card-body">
                    <form onSubmit={this.addNewPackToHangar} id={this.formId}>
                        <div className="form-group row">
                            <div className="col-auto">
                                <div className="card bg-dark text-white-50 col-auto border-secondary m-1">
                                    <div className="card-title ">Info</div>
                                    <div className="form-group row">
                                        <div className="col-auto">
                                            <input
                                                type="text"
                                                className="form-control alert-info mb-1"
                                                id="inputPackName"
                                                autoComplete="off"
                                                onChange={this.handleChange}
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="col-auto">
                                            <input
                                                type="text"
                                                className="form-control alert-info mb-1"
                                                id="inputPackPrice"
                                                placeholder="Price"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="card bg-dark text-white-50 col-auto border-secondary m-1">
                                    <div className="card-title ">Extras</div>
                                    <div className="form-group row">
                                        <div className="col-auto">
                                            <select
                                                className="form-control alert-info text-muted mb-1"
                                                id="hangarExtraSelectPack"
                                            >
                                                <option>Hangar...</option>
                                                <option>VFG Industrial</option>
                                                <option>Revel and York</option>
                                                <option>AeroView</option>
                                                <option>Self-Land</option>
                                            </select>
                                        </div>

                                        <div className="col-auto">
                                            <input
                                                type="text"
                                                className="form-control alert-info mb-1"
                                                id="inputUEC"
                                                placeholder="UEC"
                                            />
                                        </div>
                                        <div className="form-group col-auto">
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="LTIcheckPack"
                                                    name="LTI"
                                                />
                                                <label
                                                    className="form-check-label text-white-50"
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
                                                />
                                                <label
                                                    className="form-check-label text-white-50"
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
                                                />
                                                <label
                                                    className="form-check-label text-white-50"
                                                    htmlFor="Sq42GameCheck"
                                                >
                                                    Sq42 Game
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-secondary ml-1"
                        >
                            Create Pack
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-light ml-1"
                            onClick={() => {
                                document.getElementById(this.formId).reset()
                            }}
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

export default AddPackForm
