import React from 'react'

function PackButton(props) {
    const target = '#multiCollapsePack' + props.number.toString()
    const aria = 'multiCollapsePack' + props.number.toString()

    return (
        <div className="input-group m-sm-2 ">
            <button
                className="btn btn-outline alert-info dropdown-toggle"
                type="button"
                data-toggle="collapse"
                data-target={target}
                aria-expanded="false"
                aria-controls={aria}
            >
                {props.name}
            </button>
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
    )
}

export default PackButton
