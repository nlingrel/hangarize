import React from 'react'
import PacksConstainer from './PacksContainer'
import HangarContainer from './HangarContainer'
import HangarControlBar from './HangarControlBar'

function ActualHangar(props) {
    return (
        <>
            <HangarControlBar
                addNewPackToHangar={props.addNewPackToHangar}
                addNewShipToHangar={props.addNewShipToHangar}
                suggestShipNames={props.suggestShipNames}
                renderSuggestedShipNames={props.renderSuggestedShipNames}
                shipNameField={props.shipNameField}
            />
            <HangarContainer packs={props.packs} ships={props.ships} />
        </>
    )
}

export default ActualHangar
