import React from 'react'

function CCUContainer(props) {
    const target = `#collapseCCU${props.id}`
    const collapseId = `collapseCCU${props.id}`
    return (
        <div className="card bg-dark border-light text-light mx-1 mb-1">
            <div
                className="btn-group "
                role="group"
                data-toggle="collapse"
                data-target={target}
            >
                <div className="btn text-light border-right border-secondary">
                    {' '}
                    {props.base}
                </div>
                <div className="btn text-light "> {props.to}</div>

                <div className="btn text-light pt-2">
                    <small className="text-white-50">
                        $&nbsp;<span className="text-light">{props.price}</span>
                    </small>
                </div>
                <div className="btn-group-vertical collapse" id={collapseId}>
                    <button
                        className="btn badge btn-outline-danger "
                        onClick={(e) => {
                            e.preventDefault()
                            props.removeCCU(props.id)
                        }}
                    >
                        <svg
                            className="bi bi-trash"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                            />
                        </svg>
                    </button>
                    <button
                        className="btn badge btn-warning"
                        onClick={props.meltCCU}
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
                </div>
            </div>
        </div>
    )
}

export default CCUContainer
