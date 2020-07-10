import React from 'react'

function DragPorts(props) {
    return (
        <div className="card bg-dark border-secondary">
            <div className="card-header">Drag and Drop</div>
            <div className="card-body bg-secondary text-dark">
                <div className="card-deck">{props.children}</div>
            </div>
        </div>
    )
}

export default DragPorts
