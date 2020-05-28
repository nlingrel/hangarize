import React from 'react'
import CategoryToolBar from './CategoryToolBar'

//send onclicks, name, and items, and addForm

function CategoryContainer(props) {
    return (
        <div className="card bg-dark text-light border-info">
            <div className="card-header">
                <div className="d-flex justify-content-between">
                    <div className="d-flex text-justify">{props.name}</div>

                    <div className="d-flex">
                        <CategoryToolBar name={props.name} />
                    </div>
                </div>
            </div>
            <div>{props.form} </div>
            <div className="card-body bg-secondary">
                <div className="card-deck">{props.items}</div>
            </div>
        </div>
    )
}

export default CategoryContainer
