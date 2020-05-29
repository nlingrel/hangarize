import React from 'react'

function HangarControlBar(props) {
    return (
        <>
            <div className="container-fluid">
                <div className="card bg-dark border-bottom border-secondary">
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
            </div>
        </>
    )
}

export default HangarControlBar
