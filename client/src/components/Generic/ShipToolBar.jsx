import React from 'react'
import UpgradeButton from './UpgradeButton'
import MinusButton from './MinusButton'
import MeltButton from './MeltButton'

//send name
function ShipToolBar(props) {
    return (
        <>
            <div className="btn">
                <UpgradeButton onClick={props.upgradeShip} />
                {props.meltable ? <MeltButton melt={props.meltShip} /> : ''}
                <MinusButton onClick={props.removeShip} />
            </div>
        </>
    )
}

export default ShipToolBar
