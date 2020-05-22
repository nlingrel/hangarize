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
}

export default Factory
