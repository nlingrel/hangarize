import React from 'react'
import HangarizeControlBar from '../components/Hangars/HangarizeControlBar'
import HangarControlBar from './Hangars/HangarControlBar'
import HangarContainer from './Hangars/HangarContainer'

function Hangarize(props) {
    return (
        <div>
            <HangarizeControlBar
                hangars={props.hangars}
                addNewHangarFromActual={props.addNewHangarFromActual}
                selectHangar={props.selectHangar}
                hangarId={props.hangarId}
                stepHangarPage={props.stepHangarPage}
                jumpHangarPage={props.jumpHangarPage}
                hangarizePage={props.hangarizePage}
                setHangarizeFilter={props.setHangarizeFilter}
                hangarizeFilter={props.hangarizeFilter}
                toggleHangarizeSort={props.toggleHangarizeSort}
                hangarizeSort={props.hangarizeSort}
            />
            <HangarControlBar
                allCanDelete={props.allCanDelete}
                allDeleteLock={props.allDeleteLock}
                calcTotal={props.calcTotal}
                credit={props.credit}
                changeTotal={props.changeTotal}
                hangarTotal={props.hangarTotal}
                hangarName={props.hangarName}
                removeHangar={props.removeHangar}
                hangarId={props.hangarId}
                refreshDone={props.refreshDone}
            />
            <HangarContainer
                packs={props.packs}
                ships={props.ships}
                ccus={props.ccus}
                items={props.items}
                buyback={props.buyback}
                setBuyBackFilter={props.setBuyBackFilter}
                buybackFilter={props.buybackFilter}
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
                removePackFromBuyBuyBack={props.removePackFromBuyBuyBack}
                removeShipFromPack={props.removeShipFromPack}
                bbRemoveShipFromPack={props.bbRemoveShipFromPack}
                removeItemfromPack={props.removeItemfromPack}
                bbRemoveItemfromPack={props.bbRemoveItemfromPack}
                removeShipFromHangar={props.removeShipFromHangar}
                removeShipFromBuyBack={props.removeShipFromBuyBack}
                removeCCUFromHangar={props.removeCCUFromHangar}
                removeCCUFromBuyBack={props.removeCCUFromBuyBack}
                removeItemFromHangar={props.removeItemFromHangar}
                removeItemFromBuyBack={props.removeItemFromBuyBack}
                removeItemFromShip={props.removeItemFromShip}
                bbRemoveItemFromShip={props.bbRemoveItemFromShip}
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
        </div>
    )
}

export default Hangarize
