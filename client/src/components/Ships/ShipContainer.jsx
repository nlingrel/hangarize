import React from 'react'
import ManuIcon from '../Generic/ManuIcon'

//in: name, manu, role, size, shipId, key
function ShipContainer(props) {
    return (
        <div className="accordion col">
            <div className="card">
                <button
                    className="btn btn-block text-left"
                    id={`heading${props.shipId}${props.number}`}
                    type="button"
                    data-toggle="collapse"
                    data-target={`#collapse${props.shipId}${props.number}`}
                    aria-expanded="false"
                    aria-controls={`heading${props.shipId}${props.number}`}
                >
                    {props.name}
                </button>

                <div
                    id={`collapse${props.shipId}${props.number}`}
                    className="collapse"
                    aria-labelledby={`collapse${props.shipId}${props.number}`}
                    data-parent={`#collapse${props.shipId}${props.number}`}
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

export default ShipContainer
