import React from 'react'
import HideButton from './HideButton'
import MinusButton from './MinusButton'
import MeltButton from './MeltButton'

//send name
function PackToolBar(props) {
    return (
        <>
            <div className="btn">
                <MeltButton />
                <MinusButton onClick={props.removePack} />
            </div>
            <div className="btn">
                <HideButton dataTarget={props.dataTarget} />
            </div>
        </>
    )
}

export default PackToolBar
