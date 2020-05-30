import React from 'react'
import ManuIcon from '../Generic/ManuIcon'
import ShipToolBar from '../Generic/ShipToolBar'
import PlusButton from '../Generic/PlusButton'
import ShipItems from './ShipItems'
import HideButton from '../Generic/HideButton'

//in: name, manu, role, size, shipId, key
function ShipContainer(props) {
    const dragStart = (e) => {
        const target = e.target

        e.dataTransfer.setData('cardId', target.id)
        e.dataTransfer.setData('type', 'ship')
        e.dataTransfer.setData('shipId', props.shipId)

        // setTimeout(() => {
        //     target.style.display = 'none'
        // }, 0)
    }

    const dragOver = (e) => {
        e.stopPropagation()
    }

    return (
        <div
            className="accordion"
            id={props.shipId}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
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
                        data-target={`#collapseShip${props.shipId}${props.number}`}
                        aria-expanded="false"
                        aria-controls={`heading${props.shipId}${props.number}`}
                    >
                        {props.name}
                    </button>
                    <div
                        className="btn "
                        data-toggle="collapse"
                        data-target={`#collapseShip${props.shipId}${props.number}`}
                    >
                        <div className="bg-dark text-light btn btn-ouline-info">
                            <small>${props.price}</small>
                        </div>
                    </div>
                    <div
                        className="btn collapse"
                        id={`collapseShip${props.shipId}${props.number}`}
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
                    id={`collapseShip${props.shipId}${props.number}`}
                    className="collapse"
                    aria-labelledby={`collapseShip${props.shipId}${props.number}`}
                    data-parent={`#collapseShip${props.shipId}${props.number}`}
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
                            dataTarget={`#collapseShip${props.shipId}${props.number}`}
                            classes={['btn-block']}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShipContainer
