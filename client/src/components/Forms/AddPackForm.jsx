import React from 'react'
import HideButton from '../Generic/HideButton'
import CardTray from '../Generic/CardTray'
import PackContainer from '../Packs/PackContainer'
import DragPorts from '../Generic/DragPorts'
import DragPort from '../Generic/DragPort'

function AddPackForm(props) {
    const collapseId = `${props.name}FormCollapse`
    const collapseTarget = `#${props.name}FormCollapse`
    const formId = `${props.name}AddForm`
    const trayPacks = props.trayPacks.map((pack, i) => {
        return (
            <PackContainer
                key={i}
                packId={pack.id}
                name={pack.name}
                ships={pack.ships}
                items={pack.items}
                price={pack.price}
                number={i}
                addShipToPack={props.addShipToPack}
            />
        )
    })
    return (
        <div
            className="card border border-secondary collapse bg-dark text-light"
            id={collapseId}
        >
            <div className="card-body">
                <form onSubmit={props.addNewPackToHangar} id={formId}>
                    <div className="form-group row">
                        <div className="col-auto">
                            <div className="card bg-dark text-white-50 col-auto border-secondary m-1">
                                <div className="card-title ">Info</div>
                                <div className="form-group row">
                                    <div className="col-auto">
                                        <input
                                            type="text"
                                            className="form-control alert-info mb-1"
                                            id="inputPackName"
                                            autoComplete="off"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <input
                                            type="text"
                                            className="form-control alert-info mb-1"
                                            id="inputPackPrice"
                                            placeholder="Price"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="card bg-dark text-white-50 col-auto border-secondary m-1">
                                <div className="card-title ">Extras</div>
                                <div className="form-group row">
                                    <div className="col-auto">
                                        <select
                                            className="form-control alert-info text-muted mb-1"
                                            id="hangarExtraSelectPack"
                                        >
                                            <option>Hangar...</option>
                                            <option>VFG Industrial</option>
                                            <option>Revel and York</option>
                                            <option>AeroView</option>
                                            <option>Self-Land</option>
                                        </select>
                                    </div>

                                    <div className="col-auto">
                                        <input
                                            type="text"
                                            className="form-control alert-info mb-1"
                                            id="inputUEC"
                                            placeholder="UEC"
                                        />
                                    </div>
                                    <div className="form-group col-auto">
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="LTIcheckPack"
                                                name="LTI"
                                            />
                                            <label
                                                className="form-check-label text-white-50"
                                                htmlFor="LTIcheck"
                                            >
                                                LTI
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="SCGameCheck"
                                                name="SCGame"
                                            />
                                            <label
                                                className="form-check-label text-white-50"
                                                htmlFor="SCGameCheck"
                                            >
                                                SC Game
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="Sq42GameCheck"
                                                name="Sq42"
                                            />
                                            <label
                                                className="form-check-label text-white-50"
                                                htmlFor="Sq42GameCheck"
                                            >
                                                Sq42 Game
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-secondary ml-1">
                        Create Pack
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-light ml-1"
                        onClick={() => {
                            document.getElementById(formId).reset()
                        }}
                    >
                        Reset
                    </button>
                </form>
            </div>
            <div className="card-footer">
                <HideButton
                    dataTarget={collapseTarget}
                    classes={['btn-block']}
                />
            </div>
        </div>
    )
}

export default AddPackForm
