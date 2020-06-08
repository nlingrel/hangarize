import React, { Component } from 'react'
import CategoryContainer from '../Generic/CategoryContainer'
import PackContainer from '../Packs/PackContainer'
import ShipContainer from '../Ships/ShipContainer'
import ItemContainer from '../Items/ItemContainer'
import CCUContainer from '../CCUs/CCUContainer'

function BuyBackContainer(props) {
    const renderPacks = () => {
        const packs = props.buyback.packs.map((pack, i) => {
            return (
                <PackContainer
                    key={i}
                    packId={pack.id}
                    name={pack.name}
                    ships={pack.ships}
                    items={pack.items}
                    price={pack.price}
                    number={i}
                    addShipToPack={props.addShipToPack}
                    addItemToPack={props.addItemToPack}
                    addItemToShip={props.addItemToShip}
                    removePackFromHangar={props.removePackFromHangar}
                    removeShipFromPack={props.removeShipFromPack}
                    removeItemfromPack={props.removeItemfromPack}
                    removeItemFromShip={props.removeItemFromShip}
                    meltPack={props.buyBackPack}
                />
            )
        })
        return packs
    }

    const renderShips = () => {
        const ships = props.buyback.ships.map((ship, i) => {
            return (
                <ShipContainer
                    name={ship.name}
                    manufacturer={ship.manufacturer}
                    role={ship.role}
                    size={ship.size}
                    shipId={ship.id}
                    key={i}
                    items={ship.items}
                    inPack={true}
                    packId={this.props.packId}
                    addItemToShip={this.props.addItemToShip}
                    removeShip={(e) => {
                        e.preventDefault()
                        this.props.removeShipFromPack(
                            this.props.packId,
                            ship.id
                        )
                    }}
                    removeItemFromShip={this.props.removeItemFromShip}
                />
            )
        })
        return ships
    }

    const renderItems = () => {
        const items = props.buyback.items.map((item, i) => {
            return (
                <div key={i}>
                    <ItemContainer
                        name={item.name}
                        itemId={item.id}
                        key={i}
                        number={i}
                        price={item.price}
                        meltable={item.meltable}
                        showPrice={true}
                        removeItem={props.removeItemFromHangar}
                    />
                </div>
            )
        })
        return items
    }

    const renderCCUs = () => {
        const ccus = props.buyback.ccus.map((c, i) => {
            return (
                <div key={i}>
                    <CCUContainer
                        base={c.base}
                        to={c.to}
                        price={c.price}
                        id={c.id}
                        removeCCU={this.props.removeCCUFromHangar}
                    />
                </div>
            )
        })
        return ccus
    }

    const packs = renderPacks()
    const bbItems = renderItems()
    const ships = renderShips()
    const ccus = renderCCUs()
    const items = [...packs, ...ships, ...bbItems, ...ccus]
    return (
        <CategoryContainer
            items={items}
            name={'BuyBack'}
            toggleDeleteLock={props.buybacksDeleteLock}
            deleteLocked={props.buybacksCanDelete}
            // form={
            //     <AddPackForm
            //         name={'Packs'}
            //         addNewPackToHangar={props.addNewPackToHangar}
            //         trayPacks={props.packs}
            //     />
            // }
        />
    )
}

export default BuyBackContainer