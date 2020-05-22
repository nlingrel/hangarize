import React from 'react'
import PacksContainer from './PacksContainer'
import ShipsContainer from './ShipsContainer'

function HangarContainer(props) {
    return (
        <div class="container">
            <PacksContainer packs={props.packs} />
            <ShipsContainer ships={props.ships} />
        </div>
    )
}

export default HangarContainer
