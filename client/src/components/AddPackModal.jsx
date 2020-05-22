import React from 'react'
import AddPackForm from './AddPackForm'

function AddPackModal(props) {
    return (
        <div
            class="modal fade"
            id="addPackModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="addPackModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addPackModal">
                            Add Pack
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
                        <AddPackForm
                            addNewPackToHangar={props.addNewPackToHangar}
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

export default AddPackModal
