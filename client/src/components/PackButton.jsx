import React from 'react'

function PackButton(props) {
    const target = '#multiCollapsePack' + props.number.toString()
    const aria = 'multiCollapsePack' + props.number.toString()
    console.log(props.number, typeof props.number)
    return (
        <div className="input-group m-sm-2">
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
        </div>
    )
}

export default PackButton
