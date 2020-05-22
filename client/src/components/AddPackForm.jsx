import React from 'react'

function AddPackForm(props) {
    return (
        <form onSubmit={props.addNewPackToHangar}>
            <div className="form-group row">
                <label
                    htmlFor="inputPackName"
                    className="col-sm-2 col-form-label"
                >
                    Name
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="inputPackName"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label
                    htmlFor="inputPackPrice"
                    className="col-sm-2 col-form-label"
                >
                    Price
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="inputPackPrice"
                    />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-2">Extras</div>
                <div className="card col-sm-10">
                    <div className="card-header">
                        <p>
                            This is a template for making a new pack. Items not
                            listed here, and all ships get added within the pack
                            editor once the pack is created.
                        </p>
                    </div>
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
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="scGameCheck"
                                name="SC Game"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="scGameCheck"
                            >
                                SC Game
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="s42GameCheck"
                                name="S42 Game"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="s42GameCheck"
                            >
                                S42 Game
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
                                htmlFor="inputPackUEC"
                                className="col-sm-3 col-form-label"
                            >
                                UEC
                            </label>
                            <div className="col-sm-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPackUEC"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                    <button type="submit" className="btn btn-outline-info">
                        Create Pack
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddPackForm
