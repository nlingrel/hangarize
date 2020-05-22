import React from 'react'
import PacksContainer from './PacksContainer'
import ShipsContainer from './ShipsContainer'
import CCUsContainer from './CCUsContainer'

function HangarContainer(props) {
    return (
        <div className="container">
            <PacksContainer packs={props.packs} />
            <ShipsContainer ships={props.ships} />
            <CCUsContainer
                ccus={props.ccus}
                ships={props.ships}
                packs={props.packs}
            />
        </div>
    )
}

export default HangarContainer
