import React from 'react'

function PlusButton(props) {
    const collapseTarget = `#${props.name}FormCollapse`
    return (
        <button
            type="button"
            className="btn btn-outline-info btn-sm"
            onClick={props.onClick}
            data-toggle="collapse"
            data-target={collapseTarget}
        >
            +
        </button>
    )
}

export default PlusButton
