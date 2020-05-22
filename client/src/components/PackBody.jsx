import React from 'react'

function PackBody(props) {
    const ships = props.ships.map((ship, i) => {
        return (
            <li
                key={i}
                class="list-group-item d-flex justify-content-between align-items-center"
            >
                {ship.name}
                <button class="btn btn-outline-info badge-pill">CCU</button>
            </li>
        )
    })

    const items = props.items.map((item, i) => {
        return (
            <li
                key={i}
                class="list-group-item d-flex justify-content-between align-items-center"
            >
                {item.name}
            </li>
        )
    })

    const id = 'multiCollapsePack' + props.number.toString()

    return (
        <div className="col">
            <div className="collapse multi-collapse" id={id}>
                <a
                    className="card-title h6"
                    data-toggle="collapse"
                    href={'#' + id}
                    role="button"
                    aria-expanded="false"
                    aria-controls={id}
                >
                    {props.name}
                </a>

                <ul className="list-group list-group-horizontal-sm">
                    <li className="list-group-item">
                        <ul className="list-group">
                            Ships{ships}
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <button className="btn btn-outline-info">
                                    Add Ship
                                </button>
                            </li>
                        </ul>
                    </li>
                    <li className="list-group-item">
                        <ul className="list-group">
                            Items{items}
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <button className="btn btn-outline-info">
                                    Add Item
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PackBody

// <ul class="list-group">
//   <li class="list-group-item d-flex justify-content-between align-items-center">
//     Cras justo odio
//     <span class="badge badge-primary badge-pill">14</span>
//   </li>
//   <li class="list-group-item d-flex justify-content-between align-items-center">
//     Dapibus ac facilisis in
//     <span class="badge badge-primary badge-pill">2</span>
//   </li>
//   <li class="list-group-item d-flex justify-content-between align-items-center">
//     Morbi leo risus
//     <span class="badge badge-primary badge-pill">1</span>
//   </li>
// </ul>
