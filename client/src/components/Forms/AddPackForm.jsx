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
                                className="form-control bg-secondary"
                                id="inputPackName"
                                autoComplete="off"
                                placeholder="Name"
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control bg-secondary"
                                id="inputPackPrice"
                                placeholder="Price"
                            />
                        </div>
                    </div>

                    <div className="card bg-dark text-white-50 col-auto border-secondary">
                        <div className="card-title ">Extras</div>
                        <div className="form-group row">
                            <div className="col-auto">
                                <select
                                    className="form-control bg-secondary text-white-50"
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
                                    className="form-control bg-secondary"
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
                                        className="form-check-label text-muted"
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
                                        className="form-check-label text-muted"
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
                                        className="form-check-label text-muted"
                                        htmlFor="Sq42GameCheck"
                                    >
                                        Sq42 Game
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button
                                type="submit"
                                className="btn btn-outline-info"
                            >
                                Create Pack
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-info"
                                onClick={() => {
                                    document.getElementById(formId).reset()
                                }}
                            >
                                Reset
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-info"
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

export default AddPackForm
