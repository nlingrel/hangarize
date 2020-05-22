import React from 'react'
import AddShipForm from './AddShipForm'

function AddShipModal(props) {
    return (
        <div
            class="modal fade"
            id="addShipModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="addShipModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addShipModal">
                            Add Ship
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <AddShipForm
                            addNewShipToHangar={props.addNewShipToHangar}
                            suggestShipNames={props.suggestShipNames}
                            renderSuggestedShipNames={
                                props.renderSuggestedShipNames
                            }
                            shipNameField={props.shipNameField}
                        />
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
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
