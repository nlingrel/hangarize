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
                addNewShipToHangar={props.addNewShipToHangar}
                suggestShipNames={props.suggestShipNames}
                renderSuggestedShipNames={props.renderSuggestedShipNames}
                shipNameField={props.shipNameField}
                addNewPackToHangar={props.addNewPackToHangar}
                resetShipAddForm={props.resetShipAddForm}
            />
        </>
    )
}

export default ActualHangar
