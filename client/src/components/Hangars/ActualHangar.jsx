import React from 'react'
// import PacksConstainer from '../Packs/PacksContainer'
import HangarContainer from './HangarContainer'
import HangarControlBar from './HangarControlBar'

function ActualHangar(props) {
    return (
        <>
            <HangarControlBar
                allCanDelete={props.allCanDelete}
                allDeleteLock={props.allDeleteLock}
                calcTotal={props.calcTotal}
                credit={props.credit}
                changeTotal={props.changeTotal}
                hangarTotal={props.hangarTotal}
            />
            <HangarContainer
                packs={props.packs}
                ships={props.ships}
                ccus={props.ccus}
                items={props.items}
                buyback={props.buyback}
                addNewShipToHangar={props.addNewShipToHangar}
                suggestShipNames={props.suggestShipNames}
                renderSuggestedShipNames={props.renderSuggestedShipNames}
                shipNameField={props.shipNameField}
                addNewPackToHangar={props.addNewPackToHangar}
                addNewItemToHangar={props.addNewItemToHangar}
                addNewCCUToHangar={props.addNewCCUToHangar}
                resetShipAddForm={props.resetShipAddForm}
                addShipToPack={props.addShipToPack}
                addItemToPack={props.addItemToPack}
                addItemToShip={props.addItemToShip}
                removePackFromHangar={props.removePackFromHangar}
                removeShipFromPack={props.removeShipFromPack}
                removeShipFromHangar={props.removeShipFromHangar}
                removeItemfromPack={props.removeItemfromPack}
                packsDeleteLock={props.packsDeleteLock}
                packsCanDelete={props.packsCanDelete}
                shipsDeleteLock={props.shipsDeleteLock}
                shipsCanDelete={props.shipsCanDelete}
                itemsDeleteLock={props.itemsDeleteLock}
                itemsCanDelete={props.itemsCanDelete}
                ccusDeleteLock={props.ccusDeleteLock}
                ccusCanDelete={props.ccusCanDelete}
                buybacksDeleteLock={props.buybacksDeleteLock}
                buybacksCanDelete={props.buybacksCanDelete}
                removeCCUFromHangar={props.removeCCUFromHangar}
                removeItemFromHangar={props.removeItemFromHangar}
                removeItemFromShip={props.removeItemFromShip}
                meltPack={props.meltPack}
                buyBackPack={props.buyBackPack}
                meltShip={props.meltShip}
                buyBackShip={props.buyBackShip}
                meltItem={props.meltItem}
                buyBackItem={props.buyBackItem}
                meltCCU={props.meltCCU}
                buyBackCCU={props.buyBackCCU}
                upgradeShip={props.upgradeShip}
            />
        </>
    )
}

export default ActualHangar
