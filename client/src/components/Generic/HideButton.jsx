import React from 'react'

function HideButton(props) {
    const target = props.dataTarget
    return (
        <button
            data-target={target}
            data-toggle="collapse"
            type="button"
            className="btn btn-secondary btn-sm ml-1"
        >
            &#8966;
        </button>
    )
}

export default HideButton
