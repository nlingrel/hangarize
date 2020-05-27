import React from 'react'
import AddPackForm from './AddPackForm'

function AddPackModal(props) {
    return (
        <div
            className="modal fade"
            id="addPackModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="addPackModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addPackModal">
                            Add Pack
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <AddPackForm
                            addNewPackToHangar={props.addNewPackToHangar}
                            suggestShipNames={props.suggestShipNames}
                            renderSuggestedShipNames={
                                props.renderSuggestedShipNames
                            }
                            shipNameField={props.shipNameField}
                            acceptShipInputForPack={
                                props.acceptShipInputForPack
                            }
                            selectedShip={props.selectedShip}
                        />
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPackModal
