import React from 'react'
import AddShipForm from './AddShipForm'

function AddShipModal(props) {
    return (
        <div
            className="modal fade"
            id="addShipModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="addShipModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addShipModal">
                            Add Ship
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
                        <AddShipForm
                            addNewShipToHangar={props.addNewShipToHangar}
                            suggestShipNames={props.suggestShipNames}
                            renderSuggestedShipNames={
                                props.renderSuggestedShipNames
                            }
                            shipNameField={props.shipNameField}
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

export default AddShipModal
