import Dexie from 'dexie'
import manuSeed from './manuSeed'
import shipSeed from './shipSeed'

const db = new Dexie('hangarize')
db.version(1).stores({
    defaultShips: 'id, name, manufacturer, role, size, defaultPrice, userPrice',
    defaultItems: 'id, name, price',
    defaultManufacturers: 'id, name, nickName',
    ships: '++id, name, manufacturer, role, price, size',
    items: '++id, name, price',
    manufacturers: '++id, name, nickName',
    packs: '++id, name, ships',
    hangars: '++id, name, packs, ships, items, ccus, buyback',
    buybacks: '++id, name, packs, ships, items, ccus',
    ccus: '++id, base, to, appliedBase, appliedTo, price',
})

db.on('populate', () => {
    db.hangars.add({
        id: 1,
        name: 'Actual',
        packs: [],
        ships: [],
        items: [],
        ccus: [],
        buyback: {},
    })
})
// Seed
const seedManus = () => {
    db.defaultManufacturers.bulkPut(manuSeed).catch((err) => {
        console.log('error seeding manufacturers')
    })
    console.log(shipSeed.length)
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
const dbGetPack = (key) => {
    return db.packs.get(key)
}

const dbGetPacks = (keys) => {
    return db.packs.bulkGet(keys)
}

const dbGetAllPacks = () => {
    return db.packs.toCollection().toArray()
}

const dbGetShip = (key) => {
    return db.userShips.get(key)
}
const dbGetShips = (keys) => {
    return db.ships.bulkGet(keys)
}

const dbGetAllShips = () => {
    return db.ships.toCollection().toArray()
}

const dbGetItems = (keys) => {
    return db.items.bulkGet(keys)
}

const dbGetAllItems = () => {
    return db.items.toCollection().toArray()
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

export {
    db,
    seedManus,
    seedShips,
    dbGetHangar,
    dbGetPack,
    dbGetPacks,
    dbGetAllPacks,
    dbGetShip,
    dbGetShips,
    dbGetAllShips,
    dbGetItems,
    dbGetAllItems,
    dbGetCCUs,
    dbPutPack,
    dbPutShip,
    dbPutHangar,
    dbPutActualHangar,
    dbUpdateHangar,
    dbUpdatePack,
}
