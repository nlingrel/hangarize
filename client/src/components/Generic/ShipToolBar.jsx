import React from 'react'
import UpgradeButton from './UpgradeButton'
import MinusButton from './MinusButton'
import MeltButton from './MeltButton'

//send name
function ShipToolBar(props) {
    return (
        <>
            <div className="btn">
                {props.canUpgrade ? (
                    <UpgradeButton shipId={props.shipId} />
                ) : (
                    ''
                )}

                {props.meltable ? (
                    <MeltButton
                        melt={props.meltShip}
                        dataTarget={props.dataTarget}
                    />
                ) : (
                    ''
                )}
                <MinusButton
                    onClick={props.removeShip}
                    dataTarget={props.dataTarget}
                />
            </div>
        </>
    )
}

export default ShipToolBar
