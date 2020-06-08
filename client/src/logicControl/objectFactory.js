class Factory {
    constructor(name) {
        this.name = name || 'factory'
    }

    newPack(name = 'pack', price = 0, hangarId = 1, buyback = false) {
        let pack = {
            name: name,
            price: price,
            hangarId: hangarId,
            buyback: buyback,
        }
        return pack
    }

    newShip(
        name = 'Name',
        price = 0,
        items = [],
        manufacturer = 'Unknown manufacturer',
        role = 'Role',
        size = 'Size',
        packId = 0,
        hangarId = 1,
        buyback = false
    ) {
        let ship = {
            name: name,
            price: price,
            items: items,
            role: role,
            manufacturer: manufacturer,
            size: size,
            packId: packId,
            hangarId: hangarId,
            buyback: buyback,
        }

        return ship
    }

    newCCU(
        base = 'base ship',
        to = 'to ship',
        price = 'price',
        appliedBase = 0,
        appliedTo = 0
    ) {
        let ccu = {
            base: base,
            price: price,
            to: to,
            appliedBase: appliedBase,
            appliedTo: appliedTo,
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
        shipId = 0
    ) {
        let item = {
            name: name,
            price: price,
            meltable: meltable,
            hangarId: hangarId,
            packId: packId,
            shipId: shipId,
        }
        return item
    }

    newHangar(
        name = 'Hangar',
        packs = [],
        ships = [],
        items = [],
        ccus = [],
        buyback = {}
    ) {
        let hangar = {
            name: name,
            packs: packs,
            ships: ships,
            items: items,
            ccus: ccus,
            buyback: buyback,
        }
        return hangar
    }

    newBuyback(packs = [], ships = [], items = [], ccus = []) {
        let bubyback = { packs: packs, ships: ships, items: items, ccus: ccus }
        return buyback
    }
}

export default Factory
