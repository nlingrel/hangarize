import React from 'react'

function HangarControlBar(props) {
    return (
        <>
            <div
                className="btn-toolbar bg-dark"
                role="toolbar"
                aria-label="Toolbar with button groups"
            >
                <div className="card bg-dark">
                    <div className="card-body">
                        <div
                            className="btn-group mr-2"
                            role="group"
                            aria-label="Second group"
                        >
                            <button
                                type="button"
                                className="btn btn-outline-info  text-light"
                            >
                                Account Total
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-info  text-light"
                            >
                                Account Tax
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-info  text-light"
                            >
                                Store Credit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HangarControlBar
