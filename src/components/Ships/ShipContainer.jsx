import React from 'react'
import ManuIcon from '../Generic/ManuIcon'
import ShipToolBar from '../Generic/ShipToolBar'
import ShipItems from './ShipItems'
import HideButton from '../Generic/HideButton'
import ItemNameField from '../Generic/ItemNameField'
import MinusButton from '../Generic/MinusButton'
import ShipUgradeField from '../Generic/ShipUpgradeField'

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
    const items = props.items.map((item, i) => {
        return (
            <div
                className="d-flex justify-content-between align-items-center bg-dark text-light pl-2 mb-1 mx-2"
                key={`shipItem${item.name}${item.id}`}
            >
                <span className="text-truncate">{item.name}</span>
                <span className="badge">
                    <MinusButton
                        packId={props.packId}
                        onClick={(e) => {
                            e.preventDefault()
                            props.removeItemFromShip(item.id, props.inPack)
                        }}
                    />
                </span>
            </div>
        )
    })
    const isUpgraded = props.toName.length > 0
    const priceColor =
        isUpgraded && !props.inPack
            ? 'text-info font-weight-bold'
            : 'text-light '
    return (
        <div
            className="accordion mb-1"
            id={props.shipId}
            // draggable={props.draggable}
            // onDragStart={dragStart}
            // onDragOver={dragOver}
        >
            <div className="card bg-dark border-light mx-1 mb-1">
                <div
                    className="input-group border-bottom border-secondary"
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
                        {isUpgraded ? props.toName : props.name}
                    </button>
                    <div
                        className="input-group-append btn boder-none pt-2"
                        data-toggle="collapse"
                        data-target={`#collapseShip${props.shipId}${props.number}`}
                    >
                        {props.showPrice ? (
                            <small className={`${priceColor}`}>
                                <span className="text-secondary">$&nbsp;</span>
                                {isUpgraded ? props.toPrice : props.price}
                            </small>
                        ) : (
                            ''
                        )}
                    </div>

                    <div
                        className=" input-group-append btn-group collapse border-none"
                        id={`collapseShip${props.shipId}${props.number}`}
                    >
                        <ShipToolBar
                            name={props.name}
                            meltable={props.meltable}
                            removeShip={props.removeShip}
                            upgradeShip={() => {
                                console.log('Upgrade ship onclick')
                            }}
                            canUpgrade={props.canUpgrade}
                            shipId={props.shipId}
                            meltShip={props.meltShip}
                            dataTarget={`#collapseShip${props.shipId}${props.number}`}
                        />
                    </div>
                </div>

                <ShipUgradeField
                    shipId={props.shipId}
                    price={props.price}
                    toPrice={props.toPrice}
                    upgradeShip={props.upgradeShip}
                />

                <div
                    id={`collapseShip${props.shipId}${props.number}`}
                    className="collapse"
                    aria-labelledby={`collapseShip${props.shipId}${props.number}`}
                    data-parent={`#collapseShip${props.shipId}${props.number}`}
                >
                    {isUpgraded ? (
                        <small className=" card-subtitle m-2 ">
                            {' '}
                            Upgraded from {props.name}
                        </small>
                    ) : (
                        ''
                    )}
                    <div className="card-body bg-dark">
                        <div className="card bg-secondary text-white">
                            <ShipItems>
                                <div className="card-header bg-transparent border-bottom border-dark mb-1 py-1">
                                    <ItemNameField
                                        placeholder="Items"
                                        className="form-control bg-dark"
                                        name={props.name}
                                        id={props.shipId}
                                        addItemToShip={props.addItemToShip}
                                        inPack={props.inPack}
                                        packId={props.packId}
                                        removeItemFromShip={
                                            props.removeItemFromShip
                                        }
                                    />
                                </div>
                                {items}
                            </ShipItems>
                        </div>
                    </div>

                    <div className="card-footer text-center">
                        {/* <div className="list-group list-group-horizontal"> */}
                        <div className="d-flex justify-content-center">
                            <div className="d-flex">
                                <ManuIcon
                                    manufacturer={props.manufacturer}
                                    classes={[
                                        'list-group-item',
                                        'bg-dark',
                                        'text-white',
                                    ]}
                                />
                            </div>
                            <div className="d-flex">
                                <small className="list-group-item bg-dark text-light pt-3">
                                    {props.size}
                                </small>
                            </div>
                        </div>
                        {/* </div> */}
                        <small className="list-group-item bg-dark text-light">
                            {props.role}
                        </small>
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
