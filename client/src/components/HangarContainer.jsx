import React from 'react'
import PacksContainer from './PacksContainer'

function HangarContainer(props) {
    return (
        <div class="container">
            <PacksContainer packs={props.packs} />
        </div>
    )
}

export default HangarContainer
