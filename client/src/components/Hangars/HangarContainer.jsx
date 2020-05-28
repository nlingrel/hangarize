import React from 'react'
import PacksContainer from '../Packs/PacksContainer'
import ShipsContainer from '../Ships/ShipsContainer'
import CCUsContainer from '../CCUs/CCUsContainer'

function HangarContainer(props) {
    return (
        <div className="container">
            <PacksContainer
                packs={props.packs}
                addNewPackToHangar={props.addNewPackToHangar}
            />
            <ShipsContainer
                ships={props.ships}
                addNewShipToHangar={props.addNewShipToHangar}
                suggestShipNames={props.suggestShipNames}
                renderSuggestedShipNames={props.renderSuggestedShipNames}
                shipNameField={props.shipNameField}
                resetShipAddForm={props.resetShipAddForm}
            />
            <CCUsContainer
                ccus={props.ccus}
                ships={props.ships}
                packs={props.packs}
            />
        </div>
    )
}

export default HangarContainer
