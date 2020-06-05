import React from 'react'
import ItemContainer from './ItemContainer'
import CategoryContainer from '../Generic/CategoryContainer'
import AddItemForm from '../Forms/AddItemForm'

function ItemsContainer(props) {
    const items = props.items.map((item, i) => {
        return (
            <ItemContainer
                name={item.name}
                itemId={item.id}
                key={i}
                number={i}
                price={item.price}
                meltable={item.meltable}
                showPrice={true}
            />
        )
    })
    return (
        <CategoryContainer
            items={items}
            name={'Items'}
            toggleDeleteLock={props.itemsDeleteLock}
            deleteLocked={props.itemsCanDelete}
            form={
                <AddItemForm
                    name={'Items'}
                    addNewItemToHangar={props.addNewItemToHangar}
                />
            }
        />
    )
}

export default ItemsContainer
