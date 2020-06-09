import React from 'react'
import CategoryContainer from '../Generic/CategoryContainer'
import CCUContainer from './CCUContainer'
import AddCCUForm from '../Forms/AddCCUForm'

function CCUsContainer(props) {
    const containers = props.ccus.map((c, i) => {
        return (
            <div key={i}>
                <CCUContainer
                    base={c.base}
                    to={c.to}
                    price={c.price}
                    id={c.id}
                    removeCCU={props.removeCCUFromHangar}
                    meltCCU={() => {
                        props.meltCCU(c.id)
                    }}
                />
            </div>
        )
    })
    let ccus = {}
    // let bases = {}
    // let tos = {}
    let matchesByBase = {}

    for (let c of props.ccus) {
        ccus[c.id] = c
        if (matchesByBase[c.base] === undefined) {
            matchesByBase[c.base] = [c]
        } else {
            matchesByBase[c.base].push(c)
        }
    }

    for (let key in matchesByBase) {
        for (let ccU of matchesByBase[key]) {
            if (matchesByBase[ccU.to] !== undefined) {
                ccU.children = matchesByBase[ccU.to]
            }
        }
    }

    const newChain = () => {
        return { head: {}, tail: {} }
    }

    return (
        <CategoryContainer
            items={containers}
            name={'CCUs'}
            toggleDeleteLock={props.ccusDeleteLock}
            deleteLocked={props.ccusCanDelete}
            form={
                <AddCCUForm
                    addNewCCUToHangar={props.addNewCCUToHangar}
                    name={'CCUs'}
                />
            }
        />
    )
}

export default CCUsContainer

// suggestedShips = this.shipSeed
//     .sort()
//     .filter((v) => regex.test(v.name) || regex.test(v.manufacturer))
