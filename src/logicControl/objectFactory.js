class Factory {
    constructor(name) {
        this.name = name || 'factory'
    }
    newHangar(name, calcTotal, credit, tax, total) {
        let hngr = {
            name: name,
            calcTotal: calcTotal,
            credit: credit,
            tax: tax,
            total: total,
        }
        return hngr
    }
    newPack(
        name = 'pack',
        price = 0,
        hangarId = 1,
        buyback = false,
        trash = false
    ) {
        let pack = {
            name: name,
            price: price,
            packHangarId: hangarId,
            buyback: buyback,
            trash: trash,
        }
        return pack
    }

    newShip(
        name = 'Name',
        price = 0,
        manufacturer = 'Unknown manufacturer',
        role = 'Role',
        size = 'Size',
        hangarId = 1,
        packId = 0,
        buyback = false,
        trash = false,
        toName = '',
        toPrice = 0
    ) {
        let ship = {
            name: name,
            price: price,
            manufacturer: manufacturer,
            role: role,
            size: size,
            shipHangarId: hangarId,
            shipPackId: packId,
            buyback: buyback,
            trash: trash,
            toName: toName,
            toPrice: toPrice,
        }

        return ship
    }

    newCCU(
        base = 'base ship',
        to = 'to ship',
        price = 'price',
        appliedBase = 0,
        appliedTo = 0,
        hangarId = 0,
        buyback = false,
        trash = false

        // base, to, appliedBase, appliedTo, price, hangarId, buyback
    ) {
        console.log('hangarId in object factory', hangarId)
        let ccu = {
            base: base,
            price: price,
            to: to,
            appliedBase: appliedBase,
            appliedTo: appliedTo,
            ccuHangarId: hangarId,
            buyback: buyback,
            trash: trash,
        }
        // 'base' and 'to' will just be ship names
        //appliedBase is the id of the baseship if the ccu is applied
        //appliedTo is the id of the new ship that the applied ccu now represents
        return ccu
    }

    newItem(
        name = 'Item',
        price = 0,
        meltable = false,
        hangarId = 1,
        packId = 0,
        shipId = 0,
        buyback = false,
        trash = false
    ) {
        let item = {
            name: name,
            price: price,
            meltable: meltable,
            itemHangarId: hangarId,
            itemPackId: packId,
            itemShipId: shipId,
            buyback: buyback,
            trash: trash,
        }
        return item
    }

    // newBuyback(packs = [], ships = [], items = [], ccus = []) {
    //     let buyback = { packs: packs, ships: ships, items: items, ccus: ccus }
    //     return buyback
    // }
}

export default Factory
