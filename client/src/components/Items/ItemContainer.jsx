import React from 'react'
import ItemToolBar from '../Generic/ItemToolBar'

function ItemContainer(props) {
    return (
        <div
            className="accordion mb-1"
            id={props.itemId}
            // draggable={props.draggable}
            // onDragStart={dragStart}
            // onDragOver={dragOver}
        >
            <div className="card bg-dark border-light">
                <div
                    className="button-group border-bottom border-secondary"
                    role="group"
                    data-toggle="collapse"
                    data-target={`#collapseItem${props.itemId}${props.number}`}
                    aria-expanded="false"
                    aria-controls={`heading${props.itemId}${props.number}`}
                >
                    <button
                        className="btn text-left text-light btn-outline-dark"
                        id={`heading${props.itemId}${props.number}`}
                        type="button"
                    >
                        {props.name}
                    </button>
                    <div
                        className="btn "
                        data-toggle="collapse"
                        data-target={`#collapseItem${props.itemId}${props.number}`}
                    >
                        {props.showPrice ? (
                            <div className="bg-dark text-light btn btn-ouline-info">
                                <small>${props.price}</small>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                    <div
                        className="btn collapse"
                        id={`collapseItem${props.itemId}${props.number}`}
                    >
                        <ItemToolBar
                            name={props.name}
                            meltable={props.meltable}
                            removeItem={() => {
                                console.log('Remove item onclick')
                            }}
                            meltItem={() => {
                                console.log('meltItem onclick')
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemContainer
