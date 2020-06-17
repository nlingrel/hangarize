import React from 'react'
import CategoryContainer from '../Generic/CategoryContainer'
import AddPackForm from '../Forms/AddPackForm'
import PackContainer from '../Packs/PackContainer'
//PacksContainer -> [PackContainer] -> [PackShips, PackItems, PackExtras]
function PacksContainer(props) {
    const items = props.packs.map((pack, i) => {
        return (
            <PackContainer
                key={i}
                packId={pack.id}
                name={pack.name}
                ships={pack.ships}
                items={pack.items}
                price={pack.price}
                number={i}
                canUpgrade={true}
                addShipToPack={props.addShipToPack}
                addItemToPack={props.addItemToPack}
                addItemToShip={props.addItemToShip}
                removePackFromHangar={props.removePackFromHangar}
                removeShipFromPack={props.removeShipFromPack}
                removeItemfromPack={props.removeItemfromPack}
                removeItemFromShip={props.removeItemFromShip}
                meltPack={props.meltPack}
                upgradeShip={props.upgradeShip}
            />
        )
    })
    return (
        <CategoryContainer
            items={items}
            name={'Packs'}
            toggleDeleteLock={props.packsDeleteLock}
            deleteLocked={props.packsCanDelete}
            form={
                <AddPackForm
                    name={'Packs'}
                    addNewPackToHangar={props.addNewPackToHangar}
                    trayPacks={props.packs}
                />
            }
        />
    )
}

export default PacksContainer
