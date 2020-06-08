import Dexie from 'dexie'
import manuSeed from './manuSeed'
import shipSeed from './shipSeed'

const db = new Dexie('hangarize')
db.version(1).stores({
    defaultShips: 'id, name, manufacturer, role, size, defaultPrice, userPrice',
    defaultItems: 'id, name, price',
    defaultManufacturers: 'id, name, nickName',
    ships:
        '++id, name, manufacturer, role, price, size, hangarId, packId, buyback',
    items: '++id, name, price, hangarId, packId, shipId, buyback',
    manufacturers: '++id, name, nickName',
    packs: '++id, name, hangarId, buyback',
    hangars: '++id, name',
    buybacks: '++id, name',
    ccus: '++id, base, to, appliedBase, appliedTo, price, hangarId, buyback',
})

db.on('populate', () => {
    db.hangars.add({
        id: 1,
        name: 'Actual',
    })
    db.buybacks.add({
        id: 1,
        name: 'Actual',
    })
})
// Seed
const seedManus = () => {
    db.defaultManufacturers.bulkPut(manuSeed).catch((err) => {
        console.log('error seeding manufacturers')
    })
}

const seedShips = () => {
    db.defaultShips.bulkPut(shipSeed).catch((err) => {
        console.log('error seeding ships', err)
    })
}

// Get
const dbGetHangar = (key) => {
    return db.hangars.get(key)
}
const dbGetBuyback = (key) => {
    return db.buybacks.get(key)
}
const dbGetPack = (key) => {
    return db.packs.get(key)
}

const dbGetPacks = (keys) => {
    return db.packs.bulkGet(keys)
}

const dbGetAllPacks = (hangarId) => {
    return db.packs.where({ hangarId: hangarId }).toArray()
}

const dbGetShip = (key) => {
    return db.userShips.get(key)
}
const dbGetShips = (keys) => {
    return db.ships.bulkGet(keys)
}

const dbGetAllShips = (hangarId) => {
    return db.ships.where({ hangarId: hangarId }).toArray()
}

const dbGetItems = (keys) => {
    return db.items.bulkGet(keys)
}

const dbGetAllItems = (hangarId) => {
    return db.items.where({ hangarId: hangarId }).toArray()
}

const dbGetAllCCUs = (hangarId) => {
    return db.ccus.where({ hangarId: hangarId }).toArray()
}

const dbGetCCUs = (keys) => {
    return db.ccus.bulkGet(keys)
}

// Put

const dbPutPack = (pack) => {
    return db.packs.put(pack)
}
const dbPutShip = (ship, key) => {
    return db.ships.put(ship)
}

const dbPutItem = (item) => {
    return db.items.put(item)
}
const dbPutItems = (items) => {
    return db.items.bulkPut(items)
}

const dbPutCCU = (ccu) => {
    return db.ccus.put(ccu)
}

const dbPutHangar = (hangar, key) => {
    return db.hangars.put(hangar, key)
}

const dbPutActualHangar = (hangar) => {
    return db.hangars.put(hangar)
}

//Update
const dbUpdateHangar = (key, obj) => {
    return db.hangars.update(key, obj)
}

const dbUpdatePack = (key, obj) => {
    return db.packs.update(key, obj)
}

const dbUpdateShip = (key, obj) => {
    return db.ships.update(key, obj)
}
const dbUpdateBuyback = (key, obj) => {
    return db.buybacks.update(key, obj)
}

//Delete
const dbDeletePack = (key) => {
    return db.packs.delete(key)
}
const dbDeleteShip = (key) => {
    return db.ships.delete(key)
}
const dbBulkDeleteShips = (keys) => {
    return db.ships.bulkDelete(keys)
}
const dbDeleteItem = (key) => {
    return db.items.delete(key)
}
const dbBulkDeleteItems = (keys) => {
    return db.items.bulkDelete(keys)
}
const dbDeleteCCU = (key) => {
    return db.ccus.delete(key)
}

export {
    db,
    seedManus,
    seedShips,
    dbGetHangar,
    dbGetBuyback,
    dbGetPack,
    dbGetPacks,
    dbGetAllPacks,
    dbGetShip,
    dbGetShips,
    dbGetAllShips,
    dbGetItems,
    dbGetAllItems,
    dbGetAllCCUs,
    dbGetCCUs,
    dbPutPack,
    dbPutShip,
    dbPutItem,
    dbPutItems,
    dbPutCCU,
    dbPutHangar,
    dbPutActualHangar,
    dbUpdateHangar,
    dbUpdateShip,
    dbUpdatePack,
    dbUpdateBuyback,
    dbDeletePack,
    dbDeleteShip,
    dbBulkDeleteShips,
    dbDeleteItem,
    dbBulkDeleteItems,
    dbDeleteCCU,
}
