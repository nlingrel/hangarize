import React from 'react'

function AddShipForm(props) {
    const suggestions = props.renderSuggestedShipNames()
    const formId = `${props.name}AddForm`
    const collapseId = `${props.name}FormCollapse`
    const collapseTarget = `#${props.name}FormCollapse`
    return (
        <div className="card border border-info collapse" id={collapseId}>
            <div className="card-body">
                <form onSubmit={props.addNewShipToHangar} id={formId}>
                    <div className="form-group row">
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
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
                                className="form-control"
                                id="inputShipPrice"
                                placeholder="Price"
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                id="inputShipManufacturer"
                                placeholder="Manufacturer"
                            />
                        </div>
                    </div>

                    <div className="card col-auto">
                        <div className="card-title text-muted">Extras</div>
                        <div className="form-group row">
                            <div className="col-auto">
                                <select
                                    className="form-control"
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
                                    className="form-control"
                                    id="inputShipSkin"
                                    placeholder="Skin"
                                />
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="LTIcheck"
                                    name="LTI"
                                />
                                <label
                                    className="form-check-label text-muted"
                                    htmlFor="LTIcheck"
                                >
                                    LTI
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button
                                type="submit"
                                className="btn btn-outline-info"
                            >
                                Create Ship
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-info"
                                onClick={() => {
                                    document.getElementById(formId).reset()
                                    props.resetShipAddForm()
                                }}
                            >
                                Reset
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                data-toggle="collapse"
                                data-target={collapseTarget}
                            >
                                Hide
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddShipForm
