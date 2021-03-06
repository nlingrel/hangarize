import React from 'react'

function MeltButton(props) {
    const collapseTarget = props.dataTarget ? props.dataTarget : ''
    return (
        <button
            className="btn btn-outline-warning btn-sm ml-1"
            title="Melt"
            onClick={props.melt}
            data-toggle="collapse"
            data-target={collapseTarget}
        >
            <svg
                className="bi bi-credit-card"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"
                />
                <rect width="3" height="3" x="2" y="9" rx="1" />
                <path d="M1 5h14v2H1z" />
            </svg>
        </button>
    )
}

export default MeltButton
