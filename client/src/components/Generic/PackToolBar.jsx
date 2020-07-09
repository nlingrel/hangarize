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
                <MeltButton
                    melt={props.meltPack}
                    dataTarget={props.dataTarget}
                />
                <MinusButton onClick={remove} dataTarget={props.dataTarget} />
            </div>
        </>
    )
}

export default PackToolBar
