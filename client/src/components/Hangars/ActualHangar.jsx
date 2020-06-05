import React from 'react'
// import PacksConstainer from '../Packs/PacksContainer'
import HangarContainer from './HangarContainer'
import HangarControlBar from './HangarControlBar'

function ActualHangar(props) {
    return (
        <>
            <HangarControlBar />
            <HangarContainer
                packs={props.packs}
                ships={props.ships}
                ccus={props.ccus}
                items={props.items}
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
            />
        </>
    )
}

export default ActualHangar
