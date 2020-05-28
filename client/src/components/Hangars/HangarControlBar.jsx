import React from 'react'

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
        </>
    )
}

export default HangarControlBar
