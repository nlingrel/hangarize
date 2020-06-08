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
                addShipToPack={props.addShipToPack}
                addItemToPack={props.addItemToPack}
                addItemToShip={props.addItemToShip}
                removePackFromHangar={props.removePackFromHangar}
                removeShipFromPack={props.removeShipFromPack}
                removeItemfromPack={props.removeItemfromPack}
                removeItemFromShip={props.removeItemFromShip}
                buyBackPack={props.buyBackPack}
                buyBackShip={props.buyBackShip}
                buyBackItem={props.buyBackItem}
                buyBackCCU={props.buyBackCCU}
            />
        </div>
    )
}

export default HangarContainer
