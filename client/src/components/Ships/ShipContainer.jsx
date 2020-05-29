import React from 'react'
import ManuIcon from '../Generic/ManuIcon'
import ShipToolBar from '../Generic/ShipToolBar'
import PlusButton from '../Generic/PlusButton'
import ShipItems from './ShipItems'
import HideButton from '../Generic/HideButton'

//in: name, manu, role, size, shipId, key
function ShipContainer(props) {
    return (
        <div className="accordion">
            <div className="card bg-dark border-light">
                <div
                    className="button-group border-bottom border-secondary"
                    role="group"
                >
                    <button
                        className="btn text-left text-light btn-outline-dark"
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
                        className="btn "
                        data-toggle="collapse"
                        data-target={`#collapse${props.shipId}${props.number}`}
                    >
                        <div className="bg-dark text-light btn btn-ouline-info">
                            <small>${props.price}</small>
                        </div>
                    </div>
                    <div
                        className="btn collapse"
                        id={`collapse${props.shipId}${props.number}`}
                    >
                        <ShipToolBar
                            name={props.name}
                            removeShip={() => {
                                console.log('Remove ship onclick')
                            }}
                            upgradeShip={() => {
                                console.log('Upgrade ship onclick')
                            }}
                        />
                    </div>
                </div>

                <div
                    id={`collapse${props.shipId}${props.number}`}
                    className="collapse"
                    aria-labelledby={`collapse${props.shipId}${props.number}`}
                    data-parent={`#collapse${props.shipId}${props.number}`}
                >
                    <div className="card-body bg-dark">
                        <div className="card bg-secondary text-white">
                            <div className="card-header bg-transparent border-bottom border-dark">
                                <div className="d-flex justify-content-between">
                                    Items&nbsp;&nbsp;
                                    <PlusButton name={props.name + 'Items'} />
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <ul className="list-group">
                                    {/* change to packItems */}
                                    <ShipItems items={props.items} />
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card-footer text-center">
                        <div className="btn-group">
                            <ManuIcon
                                manufacturer={props.manufacturer}
                                classes={['btn', 'bg-dark', 'text-white']}
                            />

                            <small className="btn bg-dark text-light">
                                {props.role}
                            </small>
                            <small className="btn bg-dark text-light">
                                {props.size}
                            </small>
                        </div>
                        <HideButton
                            dataTarget={`#collapse${props.shipId}${props.number}`}
                            classes={['btn-block']}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShipContainer
