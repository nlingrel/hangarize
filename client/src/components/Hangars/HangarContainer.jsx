import React from 'react'
import PacksContainer from '../Packs/PacksContainer'
import ShipsContainer from '../Ships/ShipsContainer'
import CCUsContainer from '../CCUs/CCUsContainer'
import ItemsContainer from '../Items/ItemsContainer'
import BuyBackContainer from '../Buybacks/BuyBackContainer'

function HangarContainer(props) {
    return (
        <div className="container-fluid bg-dark">
            <PacksContainer
                packs={props.packs}
                addNewPackToHangar={props.addNewPackToHangar}
                addShipToPack={props.addShipToPack}
                addItemToPack={props.addItemToPack}
                addItemToShip={props.addItemToShip}
                removePackFromHangar={props.removePackFromHangar}
                packsDeleteLock={props.packsDeleteLock}
                packsCanDelete={props.packsCanDelete}
                removeShipFromPack={props.removeShipFromPack}
                removeItemfromPack={props.removeItemfromPack}
                removeItemFromShip={props.removeItemFromShip}
                meltPack={props.meltPack}
                upgradeShip={props.upgradeShip}
            />
            <ShipsContainer
                ships={props.ships}
                addNewShipToHangar={props.addNewShipToHangar}
                suggestShipNames={props.suggestShipNames}
                renderSuggestedShipNames={props.renderSuggestedShipNames}
                shipNameField={props.shipNameField}
                resetShipAddForm={props.resetShipAddForm}
                addItemToShip={props.addItemToShip}
                shipsDeleteLock={props.shipsDeleteLock}
                shipsCanDelete={props.shipsCanDelete}
                removeShipFromHangar={props.removeShipFromHangar}
                removeItemFromShip={props.removeItemFromShip}
                meltShip={props.meltShip}
                upgradeShip={props.upgradeShip}
            />
            <CCUsContainer
                ccus={props.ccus}
                ships={props.ships}
                packs={props.packs}
                addNewCCUToHangar={props.addNewCCUToHangar}
                ccusDeleteLock={props.ccusDeleteLock}
                ccusCanDelete={props.ccusCanDelete}
                removeCCUFromHangar={props.removeCCUFromHangar}
                meltCCU={props.meltCCU}
            />
            <ItemsContainer
                items={props.items}
                addNewItemToHangar={props.addNewItemToHangar}
                itemsDeleteLock={props.itemsDeleteLock}
                itemsCanDelete={props.itemsCanDelete}
                removeItemFromHangar={props.removeItemFromHangar}
                meltItem={props.meltItem}
            />
            <BuyBackContainer
                buybackID={props.buybackID}
                buybacksDeleteLock={props.buybacksDeleteLock}
                buybacksCanDelete={props.buybacksCanDelete}
                buyback={props.buyback}
                addNewPackToHangar={props.addNewPackToHangar}
                addNewShipToHangar={props.addNewShipToHangar}
                addNewCCUToHangar={props.addNewCCUToHangar}
                addNewItemToHangar={props.addNewItemToHangar}
                addShipToPack={props.addShipToPack}
                addItemToPack={props.addItemToPack}
                addItemToShip={props.addItemToShip}
                removePackFromHangar={props.removePackFromBuyBuyBack}
                removeShipFromPack={props.bbRemoveShipFromPack}
                removeItemfromPack={props.bbRemoveItemfromPack}
                removeItemFromShip={props.bbRemoveItemFromShip}
                removeShipFromHangar={props.removeShipFromBuyBack}
                removeCCUFromHangar={props.removeCCUFromBuyBack}
                removeItemFromHangar={props.removeItemFromBuyBack}
                buyBackPack={props.buyBackPack}
                buyBackShip={props.buyBackShip}
                buyBackItem={props.buyBackItem}
                buyBackCCU={props.buyBackCCU}
            />
        </div>
    )
}

export default HangarContainer

// removePackFromHangar={props.removePackFromHangar}
//                 removePackFromBuyBuyBack={props.removePackFromBuyBuyBack}
//                 removeShipFromPack={props.removeShipFromPack}
//                 bbRemoveShipFromPack={props.bbRemoveShipFromPack}
//                 removeItemfromPack={props.removeItemfromPack}
//                 bbRemoveItemfromPack={props.bbRemoveItemfromPack}
//                 removeShipFromHangar={props.removeShipFromHangar}
//                 removeShipFromBuyBack={props.removeShipFromBuyBack}
//                 removeCCUFromHangar={props.removeCCUFromHangar}
//                 removeCCUFromBuyBack={props.removeCCUFromBuyBack}
//                 removeItemFromHangar={props.removeItemFromHangar}
//                 removeItemFromBuyBack={props.removeItemFromBuyBack}
//                 removeItemFromShip={props.removeItemFromShip}
//                 bbRemoveItemFromShip={props.bbRemoveItemFromShip}
