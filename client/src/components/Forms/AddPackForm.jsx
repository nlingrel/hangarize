import React from 'react'

function AddPackForm(props) {
    const collapseId = `${props.name}FormCollapse`
    const collapseTarget = `#${props.name}FormCollapse`
    const formId = `${props.name}AddForm`

    return (
        <div
            className="card border border-info collapse bg-dark text-light"
            id={collapseId}
        >
            <div className="card-body">
                <form onSubmit={props.addNewPackToHangar} id={formId}>
                    <div className="form-group row">
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control alert-info"
                                id="inputPackName"
                                autoComplete="off"
                                placeholder="Name"
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control alert-info"
                                id="inputPackPrice"
                                placeholder="Price"
                            />
                        </div>
                    </div>

                    <div className="card bg-dark text-white-50 col-auto border-secondary mb-1">
                        <div className="card-title ">Extras</div>
                        <div className="form-group row">
                            <div className="col-auto">
                                <select
                                    className="form-control alert-info text-muted"
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
                                    id="inputUEC"
                                    placeholder="UEC"
                                />
                            </div>
                            <div className="form-group col-auto">
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
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <button
                                type="submit"
                                className="btn btn-outline-info ml-1"
                            >
                                Create Pack
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-info ml-1"
                                onClick={() => {
                                    document.getElementById(formId).reset()
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

export default AddPackForm
