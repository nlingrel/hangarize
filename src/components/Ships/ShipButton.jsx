import React from 'react'

function ShipButton(props) {
    let id = 'dropdownMenu' + props.number
    return (
        // <div className="input-group m-sm-2">
        <div className="dropdown input-group m-sm-2">
            <button
                className="btn btn-outline alert-info dropdown-toggle"
                type="button"
                id={id}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-id={props.id}
            >
                {props.name}
            </button>

            <div className="dropdown-menu" aria-labelledby={id}>
                <button className="dropdown-item " type="button">
                    Apply CCU
                </button>
                <button className="dropdown-item alert-warning" type="button">
                    Melt
                </button>
                <button className="dropdown-item alert-danger" type="button">
                    Remove
                </button>
            </div>
            <div className="input-group-append">
                <span className="input-group-text alert-info">
                    <small className="text-muted">
                        &nbsp;id&nbsp;{props.id}
                    </small>
                </span>
                <span className="input-group-text alert-info">
                    $&nbsp;{props.price}
                </span>
            </div>
        </div>
        // </div>
    )
}

export default ShipButton
