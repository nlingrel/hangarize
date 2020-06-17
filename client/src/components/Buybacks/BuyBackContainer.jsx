import React from 'react'
import CategoryContainer from '../Generic/CategoryContainer'
import PackContainer from '../Packs/PackContainer'
import ShipContainer from '../Ships/ShipContainer'
import ItemContainer from '../Items/ItemContainer'
import CCUContainer from '../CCUs/CCUContainer'
import BuyBackMasterForm from '../Forms/BuyBackMasterForm'
import BuyBackFilterBar from './BuyBackFilterBar'

function BuyBackContainer(props) {
    const renderPacks = () => {
        const packs = props.buyback.packs.map((pack, i) => {
            return (
                <PackContainer
                    key={`bbpack${pack.name}${pack.id}`}
                    packId={pack.id}
                    name={pack.name}
                    ships={pack.ships}
                    items={pack.items}
                    price={pack.price}
                    canUpgrade={false}
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
                    toName={ship.toName}
                    price={ship.price}
                    toPrice={ship.toPrice}
                    manufacturer={ship.manufacturer}
                    role={ship.role}
                    size={ship.size}
                    shipId={ship.id}
                    key={`bbship${ship.name}${ship.id}`}
                    canUpgrade={false}
                    items={ship.items}
                    inPack={true}
                    packId={props.packId}
                    addItemToShip={props.addItemToShip}
                    removeShip={(e) => {
                        if (props.buybacksCanDelete === false) {
                            return null
                        }
                        e.preventDefault()
                        props.removeShipFromHangar(props.packId, ship.id)
                    }}
                    removeItemFromShip={props.removeItemFromShip}
                    meltShip={(e) => {
                        e.preventDefault()

                        props.buyBackShip(ship.id)
                    }}
                    meltable={true}
                    showPrice={true}
                />
            )
        })
        return ships
    }

    const renderItems = () => {
        const items = props.buyback.items.map((item, i) => {
            return (
                <div key={`item${item.name}${item.id}`}>
                    <ItemContainer
                        name={item.name}
                        itemId={item.id}
                        number={i}
                        price={item.price}
                        meltable={item.meltable}
                        showPrice={true}
                        removeItem={props.removeItemFromHangar}
                        meltItem={(e) => {
                            props.buyBackItem(item.id)
                        }}
                    />
                </div>
            )
        })
        return items
    }

    const renderCCUs = () => {
        const ccus = props.buyback.ccus.map((c, i) => {
            return (
                <div key={`bbccu${c.base}${c.id}`}>
                    <CCUContainer
                        base={c.base}
                        to={c.to}
                        price={c.price}
                        id={c.id}
                        removeCCU={props.removeCCUFromHangar}
                        meltCCU={() => {
                            props.buyBackCCU(c.id)
                        }}
                    />
                </div>
            )
        })
        return ccus
    }
    const packs = renderPacks()
    const bbItems = renderItems()
    const ships = renderShips()
    const bbCCUs = renderCCUs()
    const filter = props.buybackFilter
    const viewItems =
        filter === 'packs'
            ? packs
            : filter === 'ships'
            ? ships
            : filter === 'items'
            ? bbItems
            : filter === 'ccus'
            ? bbCCUs
            : [...packs, ...ships, ...bbCCUs, ...bbItems]
    return (
        <CategoryContainer
            items={viewItems}
            setBuyBackFilter={props.setBuyBackFilter}
            buybackFilter={props.buybackFilter}
            name={'BuyBack'}
            toggleDeleteLock={props.buybacksDeleteLock}
            deleteLocked={props.buybacksCanDelete}
            form={
                <BuyBackMasterForm
                    addNewPackToHangar={props.addNewPackToHangar}
                    addNewShipToHangar={props.addNewShipToHangar}
                    shipNameField={props.shipNameField}
                    resetShipAddForm={props.resetShipAddForm}
                    addNewItemToHangar={props.addNewItemToHangar}
                    addNewCCUToHangar={props.addNewCCUToHangar}
                />
            }
        />
    )
}

export default BuyBackContainer
