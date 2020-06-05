import React from 'react'

function HideButton(props) {
    const target = props.dataTarget

    const classes = props.classes ? props.classes.join(' ') : ''
    const cl = `btn btn-secondary btn-sm ml-1 ${classes}`
    return (
        <button
            data-target={target}
            data-toggle="collapse"
            type="button"
            className={cl}
            title="Close"
        >
            &#8966;
        </button>
    )
}

export default HideButton
