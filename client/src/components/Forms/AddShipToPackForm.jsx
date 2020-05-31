import React from 'react'

function AddShipToPackForm(props) {
    const suggestions = props.renderSuggestedShipNames()
    return (
        <form onSubmit={props.addNewShipToHangar}>
            <div className="form-group row">
                <label
                    htmlFor="inputShipName"
                    className="col-sm-2 col-form-label"
                >
                    Name
                </label>
                <div className="col-sm-10">
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
                <div className="col-sm-10">
                    <button type="submit" className="btn btn-outline-info">
                        Create Ship
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddShipToPackForm
