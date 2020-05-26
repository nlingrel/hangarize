import React from 'react'

function PackButton(props) {
    const target = '#multiCollapsePack' + props.pack.id.toString()
    const aria = 'multiCollapsePack' + props.pack.id.toString()

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
                {props.pack.name}
            </button>
            <div className="input-group-append">
                <span className="input-group-text alert-info">
                    <small className="text-muted">
                        &nbsp;id&nbsp;{props.pack.id}
                    </small>
                </span>
                <span className="input-group-text alert-info">
                    $&nbsp;{props.pack.price}
                </span>
            </div>
        </div>
    )
}

export default PackButton
