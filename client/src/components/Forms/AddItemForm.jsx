import React, { Component } from 'react'
import HideButton from '../Generic/HideButton'

class AddItemForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemNameField: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.resetForm = this.resetForm.bind(this)
    }
    addNewItemToHangar(e) {
        e.preventDefault()
        e.persist()
        console.log('addNewItem called in component', e.target[0].value)
    }
    handleChange(e) {
        const value = e.target.value
        this.setState({ itemNameField: value })
    }

    resetForm() {
        this.setState({ itemNameField: '' })
    }

    render() {
        const collapseId = `${this.props.name}FormCollapse`
        const collapseTarget = `#${this.props.name}FormCollapse`
        const formId = `${this.props.name}AddForm`

        return (
            <div
                className="card border border-secondary collapse bg-dark text-light"
                id={collapseId}
            >
                <div className="card-body">
                    <form onSubmit={this.addNewItemToHangar} id={formId}>
                        <div className="form-group row">
                            <div className="col-auto">
                                <div className="card bg-dark text-white-50 col-auto border-secondary m-1">
                                    <div className="card-title ">Info</div>
                                    <div className="form-group row">
                                        <div className="col-auto">
                                            <input
                                                type="text"
                                                className="form-control alert-info mb-1"
                                                id="inputItemName"
                                                autoComplete="off"
                                                placeholder="Name"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="col-auto">
                                            <input
                                                type="text"
                                                className="form-control alert-info mb-1"
                                                id="inputItemPrice"
                                                placeholder="Price"
                                            />
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="meltCheckItem"
                                                name="Meltable"
                                            />
                                            <label
                                                className="form-check-label text-white-50"
                                                htmlFor="meltCheckItem"
                                            >
                                                Melt-able
                                            </label>
                                        </div>
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
                            onClick={(e) => {
                                this.resetForm()
                                document.getElementById(formId).reset()
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

export default AddItemForm
