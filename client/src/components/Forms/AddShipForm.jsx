import React from 'react'
import HideButton from '../Generic/HideButton'

function AddShipForm(props) {
    const suggestions = props.renderSuggestedShipNames()
    const formId = `${props.name}AddForm`
    const collapseId = `${props.name}FormCollapse`
    const collapseTarget = `#${props.name}FormCollapse`
    return (
        <div
            className="card border border-secondary collapse bg-dark text-light"
            id={collapseId}
        >
            <div className="card-body">
                <form onSubmit={props.addNewShipToHangar} id={formId}>
                    <div className="form-group row">
                        <div className="col-auto">
                            <div className="card bg-dark text-white-50 col-auto border-secondary m-1">
                                <div className="card-title ">Info</div>
                                <div className="form-group row">
                                    <div className="col-auto">
                                        <input
                                            type="text"
                                            className="form-control alert-info mb-1"
                                            id="inputShipName"
                                            onChange={props.suggestShipNames}
                                            value={props.shipNameField}
                                            autoComplete="off"
                                            placeholder="Name"
                                        />
                                        {suggestions}
                                    </div>
                                    <div className="col-auto">
                                        <input
                                            type="text"
                                            className="form-control alert-info mb-1"
                                            id="inputShipPrice"
                                            placeholder="Price"
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <input
                                            type="text"
                                            className="form-control alert-info mb-1"
                                            id="inputShipManufacturer"
                                            placeholder="Manufacturer"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-dark text-white-50 border-secondary col-auto mb-1">
                        <div className="card-title text-white-50">Extras</div>
                        <div className="form-group row">
                            <div className="col-auto">
                                <select
                                    className="form-control alert-info mb-1"
                                    id="hangarExtraSelect"
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
                                    id="inputShipSkin"
                                    placeholder="Skin"
                                />
                            </div>
                            <div className="form-group col-atuo">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="LTIcheck"
                                        name="LTI"
                                    />
                                    <label
                                        className="form-check-label text-white-50"
                                        htmlFor="LTIcheck"
                                    >
                                        LTI
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-secondary ml-1">
                        Create Ship
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-light ml-1"
                        onClick={() => {
                            document.getElementById(formId).reset()
                            props.resetShipAddForm()
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

export default AddShipForm
