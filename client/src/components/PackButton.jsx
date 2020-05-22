import React from 'react'

function PackButton(props) {
    const target = '#multiCollapsePack' + props.number.toString()
    const aria = 'multiCollapsePack' + props.number.toString()
    console.log(props.number, typeof props.number)
    return (
        <button
            className="btn btn-outline-dark"
            type="button"
            data-toggle="collapse"
            data-target={target}
            aria-expanded="false"
            aria-controls={aria}
        >
            {props.name}
        </button>
    )
}

export default PackButton
