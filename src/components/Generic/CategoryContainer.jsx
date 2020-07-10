import React from 'react'
import CategoryToolBar from './CategoryToolBar'
import BuyBackFilterBar from '../Buybacks/BuyBackFilterBar'

//send onclicks, name, and items, and addForm

function CategoryContainer(props) {
    return (
        <div className="card bg-dark text-light border-secondary mb-1">
            <div className="card-header">
                <div className="d-flex justify-content-between">
                    <div className="d-flex text-justify">{props.name}</div>

                    <div className="d-flex">
                        <CategoryToolBar
                            name={props.name}
                            toggleDeleteLock={props.toggleDeleteLock}
                            deleteLocked={props.deleteLocked}
                        />
                    </div>
                </div>
            </div>
            <div>{props.form} </div>
            {props.buybackFilter ? (
                <BuyBackFilterBar
                    setBuyBackFilter={props.setBuyBackFilter}
                    filter={props.buybackFilter}
                />
            ) : (
                ''
            )}

            <div className="card-body bg-secondary">
                <div className="card-deck">{props.items}</div>
            </div>
        </div>
    )
}

export default CategoryContainer
