import React from 'react'
import MinusButton from './MinusButton'
import MeltButton from './MeltButton'

//send name
function PackToolBar(props) {
    const remove = (e) => {
        e.preventDefault()
        props.removePack(props.packId, props.shipIds)
    }
    return (
        <>
            <div className="btn">
                <MeltButton meltPack={props.meltPack} />
                <MinusButton onClick={remove} />
            </div>
        </>
    )
}

export default PackToolBar
