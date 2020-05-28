import React from 'react'

function MinusButton(props) {
    return (
        <button
            className="btn btn-outline-danger btn-sm"
            onClick={props.onClick}
        >
            -
        </button>
    )
}

export default MinusButton
