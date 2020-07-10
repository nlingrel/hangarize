import React from 'react'

function CardTray(props) {
    return <div className="card-deck">{props.children}</div>
}

export default CardTray
