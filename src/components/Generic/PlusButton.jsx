import React from 'react'

function PlusButton(props) {
    const collapseTarget = `#${props.name}FormCollapse`
    const type = props.type ? 'submit' : 'button'
    return (
        <button
            type={type}
            className="btn btn-success btn-sm ml-1 font-weight-bold"
            onClick={props.onClick}
            data-toggle="collapse"
            data-target={collapseTarget}
            title={`Add ${props.name}`}
        >
            +
        </button>
    )
}

export default PlusButton
