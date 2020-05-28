import React from 'react'
import PlusButton from '../Generic/PlusButton'
import PackShips from './PackShips'
//in name, packId, number, ships
function PackContainer(props) {
    return (
        <div className="accordion col">
            <div className="card">
                <button
                    className="btn btn-block text-left"
                    id={`heading${props.packId}${props.number}`}
                    type="button"
                    data-toggle="collapse"
                    data-target={`#collapse${props.packId}${props.number}`}
                    aria-expanded="false"
                    aria-controls={`heading${props.packId}${props.number}`}
                >
                    {props.name}
                </button>

                <div
                    id={`collapse${props.packId}${props.number}`}
                    className="collapse"
                    aria-labelledby={`collapse${props.packId}${props.number}`}
                    data-parent={`#collapse${props.packId}${props.number}`}
                >
                    <div className="card-body">
                        {/* <div className="card d-flex"> */}
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                Ships
                                <PlusButton name={props.name} />
                            </div>

                            <ul className="list-group">
                                <PackShips ships={props.ships} />
                            </ul>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackContainer
