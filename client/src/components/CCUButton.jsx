import React from 'react'

function CCUButton(props) {
    let id = 'dropdownMenu' + props.number

    const options = props.options.map((op, i) => {
        return (
            <button
                className="dropdown-item"
                type="button"
                data-id={op._id}
                key={i}
            >
                {op.name}
            </button>
        )
    })
    return (
        // <div NameName="input-group m-sm-2">
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
                {props.base.name}
            </button>

            <div className="dropdown-menu" aria-labelledby={id}>
                <h6 className="dropdown-header">Apply to...</h6>

                {options}
                <br />
                <button className="dropdown-item alert-warning" type="button">
                    Melt
                </button>
                <button className="dropdown-item alert-danger" type="button">
                    Remove
                </button>
            </div>
            <div className="input-group-append">
                <span className="input-group-text alert-info">
                    >&nbsp;{props.upgrade.name}
                </span>
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

export default CCUButton
