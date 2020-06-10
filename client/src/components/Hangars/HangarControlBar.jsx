import React from 'react'
import LockButton from '../Generic/LockButton'

function HangarControlBar(props) {
    const creditColor =
        props.credit > 0
            ? 'text-succes'
            : props.credit < 0
            ? 'text-danger'
            : 'text-light'
    return (
        <>
            <div className="container-fluid mb-1">
                <div className="card bg-dark border-secondary">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <div
                                className="btn-toolbar bg-dark"
                                role="toolbar"
                                aria-label="Toolbar with button groups"
                            >
                                <div className="card-body">
                                    <ul className="list-group list-group-horizontal ">
                                        <li className="list-group-item bg-dark p-0 border-none">
                                            <div>
                                                <ul className=" list-group list-group-vertical text-light bg-dark text-center">
                                                    <li className="list-group-item text-dark font-weight-bold bg-secondary text-center">
                                                        Total
                                                    </li>
                                                    <li className=" list-group-item text-light bg-dark text-center">
                                                        ${props.total}
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="list-group-item bg-dark p-0">
                                            <div>
                                                <ul className="list-group list-group-vertical text-light bg-dark text-center">
                                                    <li className="list-group-item text-dark font-weight-bold bg-secondary text-center">
                                                        Credit
                                                    </li>
                                                    <li
                                                        className={`list-group-item ${creditColor} bg-dark text-center`}
                                                    >
                                                        ${props.credit}
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="btn-group" role="group">
                                <div className="card-body">
                                    <LockButton
                                        deleteLocked={props.allCanDelete}
                                        toggleDeleteLock={props.allDeleteLock}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HangarControlBar
