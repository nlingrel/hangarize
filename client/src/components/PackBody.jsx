import React from 'react'
import ShipListInPack from './ShipListInPack'

//props in : pack, key

function PackBody(props) {
    // const ships = props.ships.map((ship, i) => {
    //     return (
    //         <li
    //             key={i}
    //             className="list-group-item d-flex justify-content-between align-items-center"
    //             data-id={ship._id}
    //         >
    //             {ship.name}&nbsp;&nbsp;
    //             <button className="btn btn-outline-info badge">CCU</button>
    //         </li>
    //     )
    // })
    const pack = props.pack
    const items = props.pack.items.map((item, i) => {
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

    const id = 'multiCollapsePack' + pack._id.toString()

    return (
        <div className="col-sm">
            <div className="collapse multi-collapse" id={id}>
                <ul className="list-group list-group-horizontal-sm">
                    <li className="list-group-item">
                        <ul className="list-group">
                            <span>
                                {pack.name}&nbsp;&nbsp;
                                <small className="text-muted">
                                    id&nbsp;{props.id}{' '}
                                </small>
                                <span className="text-right">
                                    $&nbsp;{pack.price}
                                </span>
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
                        </ul>
                    </li>
                    <li className="list-group-item">
                        <ShipListInPack ships={pack.ships} pack={pack} />
                    </li>

                    <li className="list-group-item">
                        <ul className="list-group">Items{items}</ul>
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
