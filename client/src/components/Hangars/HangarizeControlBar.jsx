import React from 'react'

function HangarizeControlBar(props) {
    const page = props.hangarizePage
    const pgStartIndex = page * 5 - 5
    const pgEndIndex = page * 5
    const hangars = props.hangars.slice(pgStartIndex, pgEndIndex)
    const canPageForward =
        page === Math.ceil(props.hangars.length / 5)
            ? 'btn-outline-light text-secondary'
            : 'btn-outline-light'
    const canPageBackward =
        page === 1 ? 'btn-outline-light text-secondary' : 'btn-outline-light'
    const buttons = hangars.map((hngr, i) => {
        const active =
            hngr.id === props.hangarId ? 'btn-secondary' : 'btn-outline-light'
        return (
            <button
                className={`btn ${active}`}
                value={hngr.id}
                key={`hngrBtn${hngr.id}${i}`}
                onClick={props.selectHangar}
            >
                {hngr.name}
            </button>
        )
    })
    return (
        <div className="card bg-dark text-light">
            <div>
                <div className="form-group">
                    <div className="form-group row">
                        <div className="col-sm-auto">
                            <form
                                className="bg-dark text-light"
                                onSubmit={props.addNewHangarFromActual}
                            >
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control bg-dark text-light"
                                        placeholder="New Hangar"
                                    ></input>
                                    <div className="input-group-append">
                                        <button
                                            className="btn-success"
                                            type="submit"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-auto">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-light">
                                        Filter
                                    </button>
                                    <button
                                        className={`btn ${canPageBackward}`}
                                        value="backward"
                                        onClick={props.jumpHangarPage}
                                    >
                                        {'<<'}
                                    </button>
                                    <button
                                        className={`btn ${canPageBackward}`}
                                        value="backward"
                                        onClick={props.stepHangarPage}
                                    >
                                        {'<'}
                                    </button>
                                </div>
                                <div className="btn-group">{buttons}</div>
                                <div className="input-group-append">
                                    <button
                                        className={`btn ${canPageForward}`}
                                        value="forward"
                                        onClick={props.stepHangarPage}
                                    >
                                        {'>'}
                                    </button>
                                    <button
                                        className={`btn ${canPageForward}`}
                                        value="forward"
                                        onClick={props.jumpHangarPage}
                                    >
                                        {'>>'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HangarizeControlBar
