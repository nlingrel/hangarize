import React from 'react'
import LockButton from '../Generic/LockButton'

function HangarControlBar(props) {
    return (
        <>
            <div className="container-fluid mb-1">
                <div className="card bg-dark border-bottom border-secondary">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <div
                                className="btn-toolbar bg-dark"
                                role="toolbar"
                                aria-label="Toolbar with button groups"
                            >
                                <div className="card-body">
                                    <div
                                        className="btn-group mr-2"
                                        role="group"
                                        aria-label="Second group"
                                    >
                                        <button
                                            type="button"
                                            className="btn btn-outline-light  text-light"
                                        >
                                            Account Total
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-light  text-light"
                                        >
                                            Account Tax
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-light  text-light"
                                        >
                                            Store Credit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="btn-group" role="group">
                                <LockButton
                                    deleteLocked={props.allCanDelete}
                                    toggleDeleteLock={props.allDeleteLock}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HangarControlBar
