import React from 'react'

function CCUContainer(props) {
    return (
        <div className="card bg-dark border-light text-light mb-1">
            <div className="btn-group " role="group">
                <div className="btn text-light border-right border-secondary">
                    {' '}
                    {props.base}
                </div>
                <div className="btn text-light border-right border-secondary">
                    {' '}
                    {props.to}
                </div>

                <div className="btn text-light pt-2">
                    <small className="text-white-50">
                        $&nbsp;<span className="text-light">{props.price}</span>
                    </small>
                </div>
                <div className="btn-group-vertical">
                    <button className="btn badge btn-outline-danger ">X</button>
                    <button className="btn badge btn-warning">M</button>
                </div>
            </div>
        </div>
    )
}

export default CCUContainer
