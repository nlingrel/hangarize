import React from 'react'

function BuyBackFilterBar(props) {
    const filterButton =
        props.filter === 'all' ? (
            <svg
                className="bi bi-funnel"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"
                />
            </svg>
        ) : (
            <svg
                className="bi bi-funnel-fill"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M2 3.5v-2h12v2l-4.5 5v5l-3 1v-6L2 3.5z" />
                <path
                    fillRule="evenodd"
                    d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"
                />
            </svg>
        )
    const filter = props.filter
    const active = 'btn-secondary'
    const inactive = 'btn-dark'
    const packsClass = filter === 'packs' ? active : inactive
    const shipsClass = filter === 'ships' ? active : inactive
    const itemsClass = filter === 'items' ? active : inactive
    const ccusClass = filter === 'ccus' ? active : inactive
    return (
        <div className="border border-secondary">
            <div className="btn-group">
                <button
                    name="all"
                    value="all"
                    className={`btn btn-dark`}
                    onClick={props.setBuyBackFilter}
                    type="button"
                    title="No Filter"
                >
                    {filterButton}
                </button>
                <button
                    name="packs"
                    value="packs"
                    className={`btn ${packsClass}`}
                    onClick={props.setBuyBackFilter}
                    type="button"
                    title="Packs Filter"
                >
                    Packs
                </button>
                <button
                    name="ships"
                    value="ships"
                    className={`btn ${shipsClass}`}
                    onClick={props.setBuyBackFilter}
                    type="button"
                    title="Ships Filter"
                >
                    Ships
                </button>
                <button
                    name="ccus"
                    value="ccus"
                    className={`btn ${ccusClass}`}
                    onClick={props.setBuyBackFilter}
                    type="button"
                    title="CCUs Filter"
                >
                    CCUs
                </button>
                <button
                    name="items"
                    value="items"
                    className={`btn ${itemsClass}`}
                    onClick={props.setBuyBackFilter}
                    type="button"
                    title="Items Filter"
                >
                    Items
                </button>
            </div>
        </div>
    )
}

export default BuyBackFilterBar
