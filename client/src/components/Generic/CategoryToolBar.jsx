import React from 'react'
import PlusButton from './PlusButton'
import LockButton from './LockButton'

//send name
function CategoryToolBar(props) {
    return (
        <div className="btn-group" role="group" aria-label="toolbar">
            <LockButton
                name={props.name}
                deleteLocked={props.deleteLocked}
                toggleDeleteLock={props.toggleDeleteLock}
            />
            <PlusButton name={props.name} />
            {/* <button type="button" className="btn btn-secondary">
                Middle
            </button>
            <button type="button" className="btn btn-secondary">
                Right
            </button> */}
        </div>
    )
}

export default CategoryToolBar
