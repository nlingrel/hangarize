import React from 'react'
import ShipButton from './ShipButton'
import CategoryContainer from '../Generic/CategoryContainer'
import AddShipForm from '../Forms/AddShipForm'
import ShipContainer from './ShipContainer'

function ShipsContainer(props) {
    //name, manu, role, size, shipId, key
    const ships = props.ships.map((ship, i) => {
        return (
            <ShipContainer
                name={ship.name}
                manufacturer={ship.manufacturer}
                role={ship.role}
                size={ship.size}
                shipId={ship.id}
                key={i}
                number={i}
                items={ship.items}
                price={ship.price}
                draggable="true"
                meltable={true}
                showPrice={true}
                addItemToShip={props.addItemToShip}
                inPack={false}
            />
        )
    })

    return (
        <CategoryContainer
            items={ships}
            name={'Ships'}
            toggleDeleteLock={props.shipsDeleteLock}
            deleteLocked={props.shipsCanDelete}
            form={
                <AddShipForm
                    addNewShipToHangar={props.addNewShipToHangar}
                    suggestShipNames={props.suggestShipNames}
                    renderSuggestedShipNames={props.renderSuggestedShipNames}
                    shipNameField={props.shipNameField}
                    name={'Ships'}
                    resetShipAddForm={props.resetShipAddForm}
                />
            }
        />
    )
}

export default ShipsContainer
