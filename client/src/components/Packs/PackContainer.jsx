import React from 'react'
import PlusButton from '../Generic/PlusButton'
import PackShips from './PackShips'
import PackItems from './PackItems'
import PackToolBar from '../Generic/PackToolBar'
//in name, packId, number, ships
function PackContainer(props) {
    return (
        <div className="accordion">
            <div className="card bg-dark border-light">
                <div
                    className="button-group  border-bottom border-secondary"
                    role="group"
                >
                    <button
                        className="btn text-left btn-outline-dark text-light"
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
                        className="btn"
                        data-toggle="collapse"
                        data-target={`#collapse${props.packId}${props.number}`}
                    >
                        <div className="bg-dark text-light">
                            <small>
                                <span className="text-white-50">$&nbsp;</span>
                                {props.price}
                            </small>
                        </div>
                    </div>
                    <div
                        className="collapse btn"
                        id={`collapse${props.packId}${props.number}`}
                    >
                        <PackToolBar
                            removePack={() => {
                                console.log('Remove Pack onclick')
                            }}
                            meltPack={() => {
                                console.log('Melt Pack onclick')
                            }}
                        />
                    </div>
                </div>

                <div
                    id={`collapse${props.packId}${props.number}`}
                    className="collapse"
                    aria-labelledby={`collapse${props.packId}${props.number}`}
                    data-parent={`#collapse${props.packId}${props.number}`}
                >
                    {/* <div className="d-flex justify-content-between">
                        <div className="d-flex text-justify">{props.name}</div>

                        <div className="d-flex">
                            <CategoryToolBar name={props.name} />
                        </div>
                    </div> */}
                    <div className="card-body">
                        <div className="card-deck">
                            <div className="card bg-secondary text-white">
                                <div className="card-header bg-transparent border-bottom border-dark">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex text-justify">
                                            Ships&nbsp;&nbsp;
                                        </div>
                                        <div className="d-flex">
                                            <PlusButton
                                                name={props.name + 'Ships'}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <ul className="list-group ">
                                        <PackShips ships={props.ships} />
                                    </ul>
                                </div>
                            </div>
                            <div className="card bg-secondary text-white">
                                <div className="card-header bg-transparent border-bottom border-dark">
                                    <div className="d-flex justify-content-between">
                                        Items&nbsp;&nbsp;
                                        <PlusButton
                                            name={props.name + 'Items'}
                                        />
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <ul className="list-group">
                                        {/* change to packItems */}
                                        <PackItems items={props.items} />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackContainer
