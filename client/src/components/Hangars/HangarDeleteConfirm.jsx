import React from 'react'

function HangarDeleteConfirm(props) {
    return (
        // <div className="btn">
        // <div className="input-group">
        <>
            <div className="input-group-prepend text-light bg-dark mr-2">
                Delete Hangar?
            </div>
            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn-sm btn-success"
                    onClick={props.confirm}
                    value={props.hangarId}
                >
                    <svg
                        className="bi bi-check2"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                        />
                    </svg>
                </button>
                <button
                    type="button"
                    className="btn btn-sm btn-danger mr-1"
                    onClick={props.cancel}
                >
                    X
                </button>
            </div>
        </>
        // {/* </div> */}
        // </div>
    )
}

export default HangarDeleteConfirm
