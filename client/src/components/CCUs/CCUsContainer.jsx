import React from 'react'
import CCUButton from './CCUButton'
import PacksContainer from '../Packs/PacksContainer'

function CCUsContainer(props) {
    let packShips = []
    props.packs.map((pack, i) => (packShips = [...packShips, ...pack.ships]))
    // const ships = props.ships
    const bases = [...packShips, ...props.ships]

    const buttons = props.ccus.map((ccu, i) => {
        let regex = new RegExp(`^${ccu.base.name}`, 'i')
        let options = bases.filter((s) => regex.test(s.name))

        return (
            <CCUButton
                key={i}
                name={ccu.name}
                number={i}
                price={ccu.price}
                base={ccu.base}
                upgrade={ccu.upgrade}
                id={ccu.id}
                options={options}
            />
        )
    })

    return (
        <div className="card">
            <div className="card-header">CCUs</div>
            <div className="card-body">
                <h5 className="card-title">
                    <div className="form-inline">{buttons}</div>
                </h5>
            </div>
        </div>
    )
}

export default CCUsContainer

// suggestedShips = this.shipSeed
//     .sort()
//     .filter((v) => regex.test(v.name) || regex.test(v.manufacturer))
