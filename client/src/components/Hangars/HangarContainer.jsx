import React from 'react'
import PacksContainer from '../Packs/PacksContainer'
import ShipsContainer from '../Ships/ShipsContainer'
import CCUsContainer from '../CCUs/CCUsContainer'
import ItemsContainer from '../Items/ItemsContainer'

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
            />
            <ShipsContainer
                ships={props.ships}
                addNewShipToHangar={props.addNewShipToHangar}
                suggestShipNames={props.suggestShipNames}
                renderSuggestedShipNames={props.renderSuggestedShipNames}
                shipNameField={props.shipNameField}
                resetShipAddForm={props.resetShipAddForm}
                addItemToShip={props.addItemToShip}
            />
            <CCUsContainer
                ccus={props.ccus}
                ships={props.ships}
                packs={props.packs}
                addNewCCUToHangar={props.addNewCCUToHangar}
            />
            <ItemsContainer
                items={props.items}
                addNewItemToHangar={props.addNewItemToHangar}
            />
        </div>
    )
}

export default HangarContainer
