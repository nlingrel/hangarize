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
                    OK
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
