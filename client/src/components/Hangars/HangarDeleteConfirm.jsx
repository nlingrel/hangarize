import React from 'react'

function HangarDeleteConfirm(props) {
    return (
        <div>
            <div className="text-light">Delete Hangar?</div>
            <div className="btn-group">
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
            </div>
        </div>
    )
}

export default HangarDeleteConfirm
