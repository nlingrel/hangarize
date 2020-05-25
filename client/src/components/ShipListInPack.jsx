import React from 'react'
import ShipInShipListInPack from './ShipInShipListInPack'

function ShipListInPack(props) {
    const packId = props.pack._id
    const ships = props.ships.map((ship, i) => {
        return (
            <ShipInShipListInPack
                packId={packId}
                shipId={ship._id}
                name={ship.name}
                key={i}
                manu={ship.manu}
                role={ship.role}
                size={ship.size}
            />
        )
    })

    // return <ul className="list-group">Ships{ships}</ul>
    return <>Ships{ships}</>
}

export default ShipListInPack

//recieve props.ships
