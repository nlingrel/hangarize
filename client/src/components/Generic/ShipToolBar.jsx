import React from 'react'
import UpgradeButton from './UpgradeButton'
import MinusButton from './MinusButton'
import MeltButton from './MeltButton'
import HideButton from './HideButton'

//send name
function ShipToolBar(props) {
    return (
        <>
            <div className="btn">
                <UpgradeButton onClick={props.upgradeShip} />
                {props.meltable ? <MeltButton /> : ''}
                <MinusButton onClick={props.removeShip} />
            </div>
        </>
    )
}

export default ShipToolBar
