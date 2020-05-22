import React from 'react'

function ShipButton(props) {
    let id = 'dropdownMenu' + props.number
    return (
        // <div className="input-group m-sm-2">
        <div class="dropdown input-group m-sm-2">
            <button
                class="btn btn-outline alert-info dropdown-toggle"
                type="button"
                id={id}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                {props.name}
            </button>

            <div class="dropdown-menu" aria-labelledby={id}>
                <button class="dropdown-item " type="button">
                    Apply CCU
                </button>
                <button class="dropdown-item alert-warning" type="button">
                    Melt
                </button>
                <button class="dropdown-item alert-danger" type="button">
                    Remove
                </button>
            </div>
            <div className="input-group-append">
                <span class="input-group-text alert-info">
                    $&nbsp;{props.price}
                </span>
            </div>
        </div>
        // </div>
    )
}

export default ShipButton
