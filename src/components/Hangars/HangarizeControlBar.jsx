import React from 'react'

function HangarizeControlBar(props) {
    const page = props.hangarizePage
    const pgStartIndex = page * 5 - 5
    const pgEndIndex = page * 5
    const sortOrder = props.hangarizeSort === 'up' ? 1 : -1
    const currentFilter = props.hangarizeFilter
    const sortProperty = currentFilter === 'abc' ? 'name' : 'id'

    const hangars = props.hangars

        .sort((a, b) => {
            if (a[sortProperty] > b[sortProperty]) {
                return 1 * sortOrder
            }
            if (a[sortProperty] < b[sortProperty]) {
                return -1 * sortOrder
            }
            return 0
        })
        .slice(pgStartIndex, pgEndIndex)
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
    const currentSort = props.hangarizeSort
    const filterActive = 'btn btn-secondary'
    const filterInactive = 'btn btn-outline-light'
    const abcClass = currentFilter === 'abc' ? filterActive : filterInactive
    const createdClass =
        currentFilter === 'created' ? filterActive : filterInactive
    const sortButton =
        currentSort === 'up' ? (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-sort-up"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M3 13a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-1 0v10a.5.5 0 0 0 .5.5z"
                />
                <path
                    fillRule="evenodd"
                    d="M5.354 4.854a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L3 3.207l1.646 1.647a.5.5 0 0 0 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 9a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
                />
            </svg>
        ) : (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-sort-down"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M3 2a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0v-10A.5.5 0 0 1 3 2z"
                />
                <path
                    fillRule="evenodd"
                    d="M5.354 10.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L3 11.793l1.646-1.647a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 9a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
                />
            </svg>
        )
    const abcButton =
        // <svg
        //     width="1em"
        //     height="1em"
        //     viewBox="0 0 16 16"
        //     className="bi bi-sort-alpha-down"
        //     fill="currentColor"
        //     xmlns="http://www.w3.org/2000/svg"
        // >
        //     <path d="M9.664 7l.418-1.371h1.781L12.281 7h1.121l-1.78-5.332h-1.235L8.597 7h1.067zM11 2.687l.652 2.157h-1.351l.652-2.157H11zM9.027 14h3.934v-.867h-2.645v-.055l2.567-3.719v-.691H9.098v.867h2.507v.055l-2.578 3.719V14z" />
        // </svg>
        'Az'
    const button123 = '#'
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
                                            OK
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-auto">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="btn-group">
                                        <button
                                            className="btn btn-outline-light"
                                            onClick={props.toggleHangarizeSort}
                                            title="Ascending/Descending"
                                        >
                                            {sortButton}
                                        </button>
                                        <button
                                            className={`${createdClass}`}
                                            value="created"
                                            onClick={props.setHangarizeFilter}
                                            title="Sort Historically"
                                        >
                                            {button123}
                                        </button>
                                        <button
                                            className={`${abcClass}`}
                                            value="abc"
                                            type="button"
                                            onClick={props.setHangarizeFilter}
                                            title="Sort Alphabetically"
                                        >
                                            {abcButton}
                                        </button>
                                    </div>
                                    <button
                                        className={`btn ${canPageBackward}`}
                                        value="backward"
                                        onClick={props.jumpHangarPage}
                                        title="First Page"
                                    >
                                        {'<<'}
                                    </button>
                                    <button
                                        className={`btn ${canPageBackward}`}
                                        value="backward"
                                        onClick={props.stepHangarPage}
                                        title="Previous Page"
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
                                        title="Next Page"
                                    >
                                        {'>'}
                                    </button>
                                    <button
                                        className={`btn ${canPageForward}`}
                                        value="forward"
                                        onClick={props.jumpHangarPage}
                                        title="Lasts Page"
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
