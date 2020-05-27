import React from 'react'
import CCUButton from './CCUButton'
import CategoryContainer from '../Generic/CategoryContainer'

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

    return <CategoryContainer items={buttons} name={'CCUs'} />
}

export default CCUsContainer

// suggestedShips = this.shipSeed
//     .sort()
//     .filter((v) => regex.test(v.name) || regex.test(v.manufacturer))
