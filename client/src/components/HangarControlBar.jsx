import React from 'react'
import AddPackForm from './AddPackForm'

function HangarControlBar(props) {
    return (
        <>
            <div
                class="btn-toolbar"
                role="toolbar"
                aria-label="Toolbar with button groups"
            >
                <div className="card">
                    <div className="card-body">
                        <div
                            class="btn-group mr-2"
                            role="group"
                            aria-label="First group"
                        >
                            <button
                                type="button"
                                class="btn btn-outline-info"
                                data-toggle="modal"
                                data-target="#addPackModal"
                            >
                                New Pack
                            </button>
                            <button type="button" class="btn btn-outline-info">
                                New Ship
                            </button>
                            <button type="button" class="btn btn-outline-info">
                                New CCU
                            </button>
                            <button type="button" class="btn btn-outline-info">
                                New Item
                            </button>
                        </div>
                        <div
                            class="btn-group mr-2"
                            role="group"
                            aria-label="Second group"
                        >
                            <button type="button" class="btn btn-outline-info">
                                Account Total
                            </button>
                            <button type="button" class="btn btn-outline-info">
                                Account Tax
                            </button>
                            <button type="button" class="btn btn-outline-info">
                                Store Credit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
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
        </>
    )
}

export default HangarControlBar
