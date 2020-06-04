import React from 'react'
import CategoryContainer from '../Generic/CategoryContainer'
import CCUContainer from './CCUContainer'
import AddCCUForm from '../Forms/AddCCUForm'

function CCUsContainer(props) {
    const ccus = props.ccus.map((c, i) => {
        return (
            <div>
                <CCUContainer key={i} base={c.base} to={c.to} price={c.price} />
            </div>
        )
    })

    return (
        <CategoryContainer
            items={ccus}
            name={'CCUs'}
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
