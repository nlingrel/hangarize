import React from 'react'
import MinusButton from '../Generic/MinusButton'
// items
function ShipItems(props) {
    const items = props.items.map((item, i) => {
        return (
            <li
                className="list-group-item d-flex justify-content-between align-items-center bg-secondary text-white"
                key={i}
            >
                {item.name}
                <span className="badge">
                    <MinusButton />
                </span>
            </li>
        )
    })

    // return <ul className="list-group">items{items}</ul>
    return <>{items}</>
}

export default ShipItems
