import React from 'react'

function PackBody(props) {
    const ships = props.ships.map((ship, i) => {
        return (
            <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
                data-id={ship._id}
            >
                {ship.name}&nbsp;&nbsp;
                <button className="btn btn-outline-info badge">CCU</button>
            </li>
        )
    })

    const items = props.items.map((item, i) => {
        return (
            <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
                data-id={item._id}
            >
                {item.name}
            </li>
        )
    })

    const id = 'multiCollapsePack' + props.number.toString()

    return (
        <div className="col-sm">
            <div className="collapse multi-collapse" id={id}>
                <ul className="list-group list-group-horizontal-sm">
                    <li className="list-group-item">
                        <ul className="list-group">
                            {props.name}&nbsp;&nbsp;
                            <small className="text-muted">
                                id&nbsp;{props.id}{' '}
                            </small>
                            <span className="text-right">
                                $&nbsp;{props.price}
                            </span>
                            <div className="btn-group-vertical">
                                <button className="btn btn-outline-info">
                                    Add Ship
                                </button>
                                <button className="btn btn-outline-info">
                                    Add Item
                                </button>
                                {/* <br /> */}
                                <button className="btn btn-outline-warning alert-warning my-sm-1">
                                    Melt Pack
                                </button>
                                <button className="btn btn-outline-danger alert-danger mb-sm-1">
                                    Remove Pack
                                </button>
                                {/* <br /> */}
                                <a
                                    className="btn btn-outline-dark"
                                    data-toggle="collapse"
                                    href={'#' + id}
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls={id}
                                >
                                    Close
                                </a>
                            </div>
                            {/* <li className="list-group-item">{props.name}</li> */}
                            {/* <li className="list-group-item">
                                <a
                                    className="btn btn-outline-info"
                                    data-toggle="collapse"
                                    href={'#' + id}
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls={id}
                                >
                                    Close
                                </a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <button className="btn btn-outline-info">
                                    Add Ship
                                </button>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <button className="btn btn-outline-info">
                                    Add Item
                                </button>
                            </li> */}
                        </ul>
                    </li>

                    <li className="list-group-item">
                        <ul className="list-group">
                            Ships{ships}
                            {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                                <button className="btn btn-outline-info">
                                    Add Ship
                                </button>
                            </li> */}
                        </ul>
                    </li>
                    <li className="list-group-item">
                        <ul className="list-group">
                            Items{items}
                            {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                                <button className="btn btn-outline-info">
                                    Add Item
                                </button>
                            </li> */}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PackBody

// <ul className="list-group">
//   <li className="list-group-item d-flex justify-content-between align-items-center">
//     Cras justo odio
//     <span className="badge badge-primary badge-pill">14</span>
//   </li>
//   <li className="list-group-item d-flex justify-content-between align-items-center">
//     Dapibus ac facilisis in
//     <span className="badge badge-primary badge-pill">2</span>
//   </li>
//   <li className="list-group-item d-flex justify-content-between align-items-center">
//     Morbi leo risus
//     <span className="badge badge-primary badge-pill">1</span>
//   </li>
// </ul>
