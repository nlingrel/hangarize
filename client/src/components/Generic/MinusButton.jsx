import React from 'react'

function MinusButton(props) {
    return (
        <button className="btn btn-danger btn-sm ml-1" onClick={props.onClick}>
            X
        </button>
    )
}

export default MinusButton
