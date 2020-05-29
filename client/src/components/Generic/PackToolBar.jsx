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
        </>
    )
}

export default PackToolBar
