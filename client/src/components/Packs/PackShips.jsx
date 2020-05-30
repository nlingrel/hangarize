import React from 'react'
import MinusButton from '../Generic/MinusButton'
//pack ships
function PackShips(props) {
    const drop = (e) => {
        e.preventDefault()
        const cardId = e.dataTransfer.getData('cardId')
        const type = e.dataTransfer.getData('type')
        const shipId = e.dataTransfer.getData('shipId')
        const card = document.getElementById(cardId)

        if (type === 'ship') {
            // e.target.children[0].children[0].appendChild(card)
            console.log(e.target.children[0])
            console.log('Id for the ship', card.id)
            props.addShipToPack(props.packId, parseInt(shipId))
        }
        //need the ship id that is getting added
        //then set state on App to remove that ship also.
    }

    const dragOver = (e) => {
        e.preventDefault()
    }

    return (
        <div
            className="card-body p-0"
            id={props.id}
            onDrop={drop}
            onDragOver={dragOver}
        >
            <ul className="list-group">{props.children}</ul>
        </div>
    )
    // return <>{props.children}</>
}

export default PackShips
