import React from 'react'
import ShipButton from './ShipButton'
import CategoryContainer from '../Generic/CategoryContainer'
import AddShipForm from '../Forms/AddShipForm'

function ShipsContainer(props) {
    const buttons = props.ships.map((ship, i) => {
        return (
            <ShipButton
                key={i}
                name={ship.name}
                number={i}
                price={ship.price}
                id={ship.id}
            />
        )
    })

    return (
        <CategoryContainer
            items={buttons}
            name={'Ships'}
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

{
    /* <div className="input-group m-sm-2">
            <button
                className="btn btn-outline alert-info "
                type="button"
                data-toggle="collapse"
                data-target={target}
                aria-expanded="false"
                aria-controls={aria}
            >
                {props.name}
            </button>
            <div className="input-group-append">
                <span className="input-group-text alert-info">
                    $&nbsp;{props.price}
                </span>
            </div>
        </div> */
}
