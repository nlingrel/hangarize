import React from 'react'

import AddPackModal from '../Forms/AddPackModal'
import AddShipModal from '../Forms/AddShipModal'

function HangarControlBar(props) {
    return (
        <>
            <div
                className="btn-toolbar"
                role="toolbar"
                aria-label="Toolbar with button groups"
            >
                {/* <div className="card">
                    <div className="card-body"> */}
                <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="First group"
                >
                    <button
                        type="button"
                        className="btn btn-outline-info"
                        data-toggle="modal"
                        data-target="#addPackModal"
                    >
                        New Pack
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-info"
                        data-toggle="modal"
                        data-target="#addShipModal"
                    >
                        New Ship
                    </button>
                    <button type="button" className="btn btn-outline-info">
                        New CCU
                    </button>
                    <button type="button" className="btn btn-outline-info">
                        New Item
                    </button>
                </div>
                <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="Second group"
                >
                    <button type="button" className="btn btn-outline-info">
                        Account Total
                    </button>
                    <button type="button" className="btn btn-outline-info">
                        Account Tax
                    </button>
                    <button type="button" className="btn btn-outline-info">
                        Store Credit
                    </button>
                </div>
                {/* </div>
                </div> */}
            </div>
            <AddPackModal addNewPackToHangar={props.addNewPackToHangar} />
            <AddShipModal
                addNewShipToHangar={props.addNewShipToHangar}
                suggestShipNames={props.suggestShipNames}
                renderSuggestedShipNames={props.renderSuggestedShipNames}
                shipNameField={props.shipNameField}
            />
        </>
    )
}

export default HangarControlBar
