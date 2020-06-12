import React, { Component } from 'react'
import HideButton from '../Generic/HideButton'

class AddItemForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameField: '',
            priceField: '',
            meltableSelected: false,
        }
        this.nameChange = this.nameChange.bind(this)
        this.priceChange = this.priceChange.bind(this)
        this.meltableChange = this.meltableChange.bind(this)
        this.addNewItemToHangar = this.addNewItemToHangar.bind(this)
        this.resetForm = this.resetForm.bind(this)
        this.formId = `${this.props.name}AddForm`
    }
    addNewItemToHangar(e) {
        e.preventDefault()
        e.persist()

        this.props.addNewItemToHangar(e)
        this.resetForm()
    }
    nameChange(e) {
        const value = e.target.value
        this.setState({ nameField: value })
    }
    priceChange(e) {
        const value = e.target.value
        const intVal = parseInt(value)

        if (!Number.isNaN(intVal) || value === '-') {
            this.setState({ priceField: value })
        } else {
            this.setState({ priceField: '' })
        }
    }
    meltableChange(e) {
        if (e.target.checked) {
            this.setState({ meltableSelected: true })
        } else {
            this.setState({ meltableSelected: false })
        }
    }

    resetForm() {
        this.setState({
            nameField: '',
            priceField: '',
            meltableSelected: false,
        })
        document.getElementById(this.formId).reset()
    }

    render() {
        const collapseId = `${this.props.name}FormCollapse`
        const collapseTarget = `#${this.props.name}FormCollapse`

        const filled = 'bg-dark text-white'
        const empty = 'bg-dark'

        const nameFilled = this.state.nameField.length > 0 ? filled : empty
        const priceFilled = this.state.priceField.length > 0 ? filled : empty
        const checkedMelt = this.state.meltableSelected
            ? 'text-light'
            : 'text-dark'

        return (
            <div
                className="card border border-secondary collapse bg-dark text-light"
                id={collapseId}
            >
                <div className="card-body">
                    <form onSubmit={this.addNewItemToHangar} id={this.formId}>
                        <div className="form-row mb-3">
                            <div className="card bg-secondary font-weight-bold text-dark col-auto border-dark p-2 ">
                                <div className="card-title border-bottom border-dark">
                                    Item Info
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={`form-control ${nameFilled} mb-1`}
                                        id="inputItemName"
                                        autoComplete="off"
                                        placeholder="Name"
                                        onChange={this.nameChange}
                                        value={this.state.nameField}
                                        autoComplete="off"
                                    />

                                    <input
                                        type="text"
                                        className={`form-control ${priceFilled} mb-1`}
                                        id="inputItemPrice"
                                        placeholder="Price"
                                        onChange={this.priceChange}
                                        value={this.state.priceField}
                                        autoComplete="off"
                                    />

                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="meltCheckItem"
                                            name="Meltable"
                                            onClick={this.meltableChange}
                                            onBlur={this.meltableChange}
                                        />
                                        <label
                                            className={`form-check-label font-weight-bold ${checkedMelt}`}
                                            htmlFor="meltCheckItem"
                                        >
                                            Melt-able
                                        </label>
                                    </div>
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
                            title="Clear All"
                        >
                            <svg
                                className="bi bi-arrow-counterclockwise"
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.83 6.706a5 5 0 0 0-7.103-3.16.5.5 0 1 1-.454-.892A6 6 0 1 1 2.545 5.5a.5.5 0 1 1 .91.417 5 5 0 1 0 9.375.789z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M7.854.146a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 1 0 .708-.708L5.707 3 7.854.854a.5.5 0 0 0 0-.708z"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
                {this.props.isBuyBackForm ? (
                    ''
                ) : (
                    <div className="card-footer">
                        <HideButton
                            dataTarget={collapseTarget}
                            classes={['btn-block']}
                        />
                    </div>
                )}
            </div>
        )
    }
}

export default AddItemForm
