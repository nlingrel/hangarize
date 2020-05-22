import React from 'react'
import ShipButton from './ShipButton'

function ShipsContainer(props) {
    const buttons = props.ships.map((ship, i) => {
        return (
            <ShipButton
                key={i}
                name={ship.name}
                number={i}
                price={ship.price}
            />
        )
    })

    return (
        <div className="card">
            <div className="card-header">Ships</div>
            <div className="card-body">
                <h5 className="card-title">
                    <div className="form-inline">{buttons}</div>
                </h5>
            </div>
        </div>
    )
}

export default ShipsContainer

{
    /* <div className="input-group m-sm-2">
            <button
                className="btn btn-outline alert-info "
                type="button"
                data-toggle="collapse"
                data-target={target}
                aria-expanded="false"
                aria-controls={aria}
            >
                {props.name}
            </button>
            <div className="input-group-append">
                <span class="input-group-text alert-info">
                    $&nbsp;{props.price}
                </span>
            </div>
        </div> */
}
