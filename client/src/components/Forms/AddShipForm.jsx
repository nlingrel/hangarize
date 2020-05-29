import React from 'react'

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
                            <input
                                type="text"
                                className="form-control alert-info"
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
                                className="form-control alert-info"
                                id="inputShipPrice"
                                placeholder="Price"
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control alert-info"
                                id="inputShipManufacturer"
                                placeholder="Manufacturer"
                            />
                        </div>
                    </div>

                    <div className="card bg-dark text-white-50 border-secondary col-auto mb-1">
                        <div className="card-title text-white-50">Extras</div>
                        <div className="form-group row">
                            <div className="col-auto">
                                <select
                                    className="form-control alert-info"
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
                                    className="form-control alert-info"
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

                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <button
                                type="submit"
                                className="btn btn-outline-light ml-1"
                            >
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
                        </div>
                        <div className="d-flex">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-toggle="collapse"
                                data-target={collapseTarget}
                            >
                                &#8966;
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddShipForm
