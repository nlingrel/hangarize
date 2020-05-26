import React from 'react'
import ManuIcon from '../Generic/ManuIcon'

function ShipInShipListInPack(props) {
    let listid = `ship${props.shipId}InListInPack${props.packId}`

    return (
        <div className="accordion" id={listid}>
            <div className="card">
                <button
                    className="btn btn-block text-left"
                    id={`heading${props.shipId}`}
                    type="button"
                    data-toggle="collapse"
                    data-target={`#collapse${props.shipId}`}
                    aria-expanded="false"
                    aria-controls={`heading${props.shipId}`}
                >
                    {props.name}
                </button>

                <div
                    id={`collapse${props.shipId}`}
                    className="collapse"
                    aria-labelledby={`collapse${props.shipId}`}
                    data-parent={`#collapse${props.shipId}`}
                >
                    <div className="card-body">
                        <p className="text-muted">
                            {/* manufacturer:&nbsp;{icons[Aegis]} */}
                            {/* <img
                                className="list-group-item bg-dark"
                                src={AegisIcon}
                            ></img> */}
                            <ManuIcon
                                manu={props.manu}
                                classes={['list-group-item']}
                            />
                            <small className="list-group-item">
                                {props.role}
                            </small>
                            <small className="list-group-item">
                                {props.size}
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShipInShipListInPack
