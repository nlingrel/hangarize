import React from 'react'

function DragPort(props) {
    return (
        <div className="accordian">
            <div className="card bg-secondary border-dark">
                <div className="card-title">{props.title}</div>
            </div>
        </div>
    )
}

export default DragPort
