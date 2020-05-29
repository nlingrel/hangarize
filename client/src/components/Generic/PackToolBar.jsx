import React from 'react'
import UpgradeButton from './UpgradeButton'
import MinusButton from './MinusButton'
import MeltButton from './MeltButton'

//send name
function PackToolBar(props) {
    return (
        <div>
            <MeltButton />
            <MinusButton onClick={props.removePack} />
        </div>
    )
}

export default PackToolBar
