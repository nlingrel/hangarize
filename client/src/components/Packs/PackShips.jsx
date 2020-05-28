import React from 'react'
import MinusButton from '../Generic/MinusButton'
//pack ships
function PackShips(props) {
    const ships = props.ships.map((ship, i) => {
        return (
            <li
                className="list-group-item d-flex justify-content-between align-items-center bg-secondary text-white"
                key={i}
            >
                {ship.name}
                <span className="badge">
                    <MinusButton />
                </span>
            </li>
        )
    })

    // return <ul className="list-group">Ships{ships}</ul>
    return <>{ships}</>
}

export default PackShips
