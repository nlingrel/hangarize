import React from 'react'

function LockButton(props) {
    const locked = props.deleteLocked
    return (
        <button
            className="btn btn-sm btn-danger"
            onClick={props.toggleDeleteLock}
            title="Lock"
        >
            {locked ? (
                <svg
                    className="bi bi-unlock-fill"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z" />
                    <path
                        fillRule="evenodd"
                        d="M8.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
                    />
                </svg>
            ) : (
                <svg
                    className="bi bi-lock-fill"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="11" height="9" x="2.5" y="7" rx="2" />
                    <path
                        fillRule="evenodd"
                        d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
                    />
                </svg>
            )}
        </button>
    )
}

export default LockButton
