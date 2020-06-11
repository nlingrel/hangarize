import React from 'react'
import PackShips from './PackShips'
import ShipContainer from '../Ships/ShipContainer'
import PackItems from './PackItems'
import PackToolBar from '../Generic/PackToolBar'
import HideButton from '../Generic/HideButton'
import ShipNameField from '../Generic/ShipNameField'
import ItemNameField from '../Generic/ItemNameField'
import MinusButton from '../Generic/MinusButton'

//in name, packId, number, ships
function PackContainer(props) {
    const ships = props.ships.map((ship, i) => {
        const showToPrice = ship.toName.length > 0
        return (
            <ShipContainer
                name={ship.name}
                toName={ship.toName}
                manufacturer={ship.manufacturer}
                role={ship.role}
                size={ship.size}
                shipId={ship.id}
                price={ship.price}
                toPrice={ship.toPrice}
                key={i}
                number={i}
                items={ship.items}
                inPack={true}
                packId={props.packId}
                addItemToShip={props.addItemToShip}
                removeShip={(e) => {
                    e.preventDefault()
                    props.removeShipFromPack(ship.id, props.packId)
                }}
                removeItemFromShip={props.removeItemFromShip}
                upgradeShip={props.upgradeShip}
                showPrice={showToPrice}
            />
        )
    })

    const items = props.items.map((item, i) => {
        return (
            <div
                className="d-flex justify-content-between align-items-center bg-dark text-light pl-2 mb-1 mx-2"
                key={i}
            >
                <span className="text-truncate ">{item.name}</span>
                <span className="badge">
                    <MinusButton
                        onClick={(e) => {
                            e.preventDefault()
                            props.removeItemfromPack(item.id)
                        }}
                    />
                </span>
            </div>
        )
    })

    const shipIds = props.ships.map((ship) => {
        return ship.id
    })
    return (
        <div className="accordion mb-1">
            <div className="card bg-dark border-light">
                <div className="d-flex justify-content-between border-bottom border-secondary">
                    <div className="d-flex">
                        <div className="button-group " role="group">
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
                                        <span className="text-white-50">
                                            $&nbsp;
                                        </span>
                                        {props.price}
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div
                            className="collapse btn"
                            id={`collapsePack${props.packId}${props.number}`}
                            data-parent={`#collapsePack${props.packId}${props.number}`}
                        >
                            <PackToolBar
                                removePack={props.removePackFromHangar}
                                shipIds={shipIds}
                                meltPack={(e) => {
                                    e.preventDefault()
                                    props.meltPack(props.packId)
                                }}
                                packId={props.packId}
                                dataTarget={`#collapsePack${props.packId}${props.number}`}
                            />
                        </div>
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
                                <div className="card-header bg-transparent mb-1 py-1">
                                    <ShipNameField
                                        placeholder="Ships"
                                        className="form-control bg-dark"
                                        name={props.name}
                                        packId={props.packId}
                                        addShipToPack={props.addShipToPack}
                                    />
                                </div>
                                <PackShips
                                    id={`ships${props.packId}`}
                                    packId={props.packId}
                                    addShipToPack={props.addShipToPack}
                                >
                                    {ships}
                                </PackShips>
                            </div>
                            <div className="card bg-secondary text-white">
                                <div className="card-header bg-transparent mb-1 py-1">
                                    <ItemNameField
                                        placeholder="Items"
                                        className="form-control bg-dark"
                                        name={props.name}
                                        id={props.packId}
                                        addItemToPack={props.addItemToPack}
                                        type="pack"
                                    />
                                </div>
                                <PackItems addItemToPack={props.addItemToPack}>
                                    {items}
                                </PackItems>
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
