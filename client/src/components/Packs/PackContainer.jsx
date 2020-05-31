import React from 'react'
import PlusButton from '../Generic/PlusButton'
import PackShips from './PackShips'
import ShipContainer from '../Ships/ShipContainer'
import PackItems from './PackItems'
import PackToolBar from '../Generic/PackToolBar'
import HideButton from '../Generic/HideButton'
import ShipNameField from '../Generic/ShipNameField'

//in name, packId, number, ships
function PackContainer(props) {
    const ships = props.ships.map((ship, i) => {
        return (
            <ShipContainer
                name={ship.name}
                manufacturer={ship.manufacturer}
                role={ship.role}
                size={ship.size}
                shipId={ship.id}
                key={i}
                items={ship.items}
            />
        )
    })
    return (
        <div className="accordion">
            <div className="card bg-dark border-light">
                <div
                    className="button-group  border-bottom border-secondary"
                    role="group"
                >
                    <button
                        className="btn text-left btn-outline-dark text-light"
                        id={`heading${props.packId}${props.number}`}
                        type="button"
                        data-toggle="collapse"
                        data-target={`#collapsePack${props.packId}${props.number}`}
                        aria-expanded="false"
                        aria-controls={`heading${props.packId}${props.number}`}
                    >
                        {props.name}
                    </button>
                    <div
                        className="btn"
                        data-toggle="collapse"
                        data-target={`#collapsePack${props.packId}${props.number}`}
                    >
                        <div className="bg-dark text-light">
                            <small>
                                <span className="text-white-50">$&nbsp;</span>
                                {props.price}
                            </small>
                        </div>
                    </div>
                    <div
                        className="collapse btn"
                        id={`collapsePack${props.packId}${props.number}`}
                        data-parent={`#collapsePack${props.packId}${props.number}`}
                    >
                        <PackToolBar
                            removePack={() => {
                                console.log('Remove Pack onclick')
                            }}
                            meltPack={() => {
                                console.log('Melt Pack onclick')
                            }}
                            dataTarget={`#collapsePack${props.packId}${props.number}`}
                        />
                    </div>
                </div>

                <div
                    id={`collapsePack${props.packId}${props.number}`}
                    className="collapse"
                    aria-labelledby={`collapsePack${props.packId}${props.number}`}
                    data-parent={`#collapsePack${props.packId}${props.number}`}
                >
                    <div className="card-body">
                        <div className="card-deck">
                            <div className="card bg-secondary text-white">
                                <PackShips
                                    id={`ships${props.packId}`}
                                    packId={props.packId}
                                    addShipToPack={props.addShipToPack}
                                >
                                    <div className="card-header bg-transparent border-bottom border-dark">
                                        <ShipNameField
                                            placeholder="Ships"
                                            className="form-control bg-dark"
                                            name={props.name}
                                            packId={props.packId}
                                            addShipToPack={props.addShipToPack}
                                        />
                                    </div>

                                    {ships}
                                </PackShips>
                            </div>
                            <div className="card bg-secondary text-white">
                                <div className="card-header bg-transparent border-bottom border-dark">
                                    <div className="d-flex justify-content-between">
                                        Items&nbsp;&nbsp;
                                        <PlusButton
                                            name={props.name + 'Items'}
                                        />
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <ul className="list-group">
                                        <PackItems items={props.items} />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text center">
                        <HideButton
                            dataTarget={`#collapsePack${props.packId}${props.number}`}
                            classes={['btn-block']}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackContainer
