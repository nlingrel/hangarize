import React from 'react'
import MinusButton from './MinusButton'
import MeltButton from './MeltButton'

//send name
function ItemToolBar(props) {
    return (
        <>
            <div className="btn">
                {props.meltable ? <MeltButton /> : ''}
                <MinusButton onClick={props.removeItem} />
            </div>
        </>
    )
}

export default ItemToolBar
