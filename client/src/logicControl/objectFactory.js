class Factory {
    constructor(name) {
        this.name = name || 'factory'
    }

    newPack(name = 'pack', price = 0, ships = [], items = []) {
        let pack = {
            name: name,
            price: price,
            ships: ships,
            items: items,
        }
        return pack
    }

    newShip(
        name = 'Name',
        price = 0,
        items = [],
        manufacturer = 'Unknown manufacturer',
        role = 'Role',
        size = 'Size'
    ) {
        let ship = {
            name: name,
            price: price,
            items: items,
            role: role,
            manufacturer: manufacturer,
            size: size,
        }

        return ship
    }
}

export default Factory
