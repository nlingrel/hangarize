import React from 'react'
//pack ships
function PackShips(props) {
    const ships = props.ships.map((ship, i) => {
        return (
            <li className="list-group-item" key={i}>
                {ship.name}
            </li>
        )
    })

    // return <ul className="list-group">Ships{ships}</ul>
    return <ul className="list-group">{ships}</ul>
}

export default PackShips
