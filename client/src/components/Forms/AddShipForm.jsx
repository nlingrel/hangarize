import React from 'react'

function AddShipForm(props) {
    const suggestions = props.renderSuggestedShipNames()
    const formId = `${props.name}FormCollapse`
    const collapseTarget = `#${props.name}FormCollapse`
    return (
        <div className="card-body border collapse" id={formId}>
            <form onSubmit={props.addNewShipToHangar}>
                <div className="card-header">
                    <p>
                        This is a template for making a new Ship. Make the base
                        ship first then apply CCUs afterwards. If the Ship
                        contains another ship as one of it's Extras, then use
                        the{' '}
                        <a
                            role="button"
                            className="btn-link"
                            data-dismiss="modal"
                            data-toggle="modal"
                            href="#addPackModal"
                        >
                            New Pack&nbsp;
                        </a>
                        template instead of this one.
                    </p>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputShipName"
                        className="col-sm-3 col-form-label"
                    >
                        Name
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="inputShipName"
                            onChange={props.suggestShipNames}
                            value={props.shipNameField}
                            autoComplete="off"
                        />
                        {suggestions}
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputShipPrice"
                        className="col-sm-3 col-form-label"
                    >
                        Price
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="inputShipPrice"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputShipManufacturer"
                        className="col-sm-3 col-form-label"
                    >
                        Manufacturer
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="inputShipManufacturer"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-3">Extras</div>
                    <div className="card col-sm-9">
                        <div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="LTIcheck"
                                    name="LTI"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="LTIcheck"
                                >
                                    LTI
                                </label>
                            </div>
                            <div className="form-group">
                                <div className="form-group row ">
                                    <label
                                        className="col-sm-3 col-form-label"
                                        htmlFor="hangarExtraSelect"
                                    >
                                        Hangar
                                    </label>
                                    <div className="col-sm-4">
                                        <select
                                            className="form-control"
                                            id="hangarExtraSelect"
                                        >
                                            <option>Choose...</option>
                                            <option>VFG Industrial</option>
                                            <option>Revel and York</option>
                                            <option>AeroView</option>
                                            <option>Self-Land</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    htmlFor="inputShipSkin"
                                    className="col-sm-3 col-form-label"
                                >
                                    Skin
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputShipSkin"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-outline-info">
                            Create Ship
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-toggle="collapse"
                            data-target={collapseTarget}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddShipForm
