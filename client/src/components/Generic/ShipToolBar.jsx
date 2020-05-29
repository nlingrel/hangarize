import React from 'react'
import UpgradeButton from './UpgradeButton'
import MinusButton from './MinusButton'
import MeltButton from './MeltButton'

//send name
function ShipToolBar(props) {
    return (
        <div>
            <UpgradeButton onClick={props.upgradeShip} />
            <MeltButton />
            <MinusButton onClick={props.removeShip} />
        </div>
    )
}

export default ShipToolBar
