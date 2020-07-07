import React from 'react'

function HangarDeleteConfirm(props) {
    return (
        // <div className="btn">
        // <div className="input-group">
        <>
            <div className="input-group-prepend text-light bg-dark mr-2">
                Delete Hangar?
            </div>
            <button
                type="button"
                className="btn btn-sm btn-success"
                onClick={props.confirm}
                value={props.hangarId}
            >
                Yes
            </button>
            <button
                type="button"
                className="btn btn-sm btn-danger"
                onClick={props.cancel}
            >
                No
            </button>
        </>
        // {/* </div> */}
        // </div>
    )
}

export default HangarDeleteConfirm
