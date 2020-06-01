import Dexie from 'dexie'
import manuSeed from './manuSeed'
import shipSeed from './shipSeed'

const db = new Dexie('hangarize')
db.version(1).stores({
    defaultShips: 'id, name, manufacturer, role, size, defaultPrice, userPrice',
    defaultItems: 'id, name, price',
    defaultManufacturers: 'id, name, nickName',
    userShips: '++id, name, manufacturer, role, price, size',
    userItems: '++id, name, price',
    userManufacturers: '++id, name, nickName',
    userPacks: '++id, name, ships',
    hangars: '++id, name',
    actualBuyback: '++id',
    actualShips: '++id, name, manufacturer, role, price, size',
    actualItems: '++id, name, price',
    actualCCUs: '++id, base, to, appliedBase, appliedTo, price',
    actualPacks: '++id, name, ships',
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
const dbGetUserPack = (key) => {
    return db.userPacks.get(key)
}

const dbGetUserPacks = (keys) => {
    return db.userPacks.bulkGet(keys)
}

const dbGetHangar = (key) => {
    return db.hangars.get(key)
}

const dbGetUserHangar = (key) => {
    return db.userHangars.get(key)
}

const dbGetActualShips = (keys) => {
    return db.userShips.bulkGet(keys)
}

const dbGetActualPacks = (keys) => {
    return db.actualPacks.bulkGet(keys)
}

const dbGetActualItems = (keys) => {
    return db.actualItems.bulkGet(keys)
}

const dbGetActualCCUs = (keys) => {
    return db.actualCCUs.bulkGet(keys)
}

const dbGetUserShip = (key) => {
    return db.userShips.get(key)
}

const dbGetAllUserPacks = () => {
    return db.userPacks.toCollection().toArray()
}

const dbGetAllUserShips = () => {
    return db.userShips.toCollection().toArray()
}
// Put
const dbPutShip = (ship, key) => {
    return db.userShips.put(ship)
}

const dbPutActualHangar = (hangar) => {
    return db.hangars.put(hangar)
}
const dbPutUserPack = (pack, key) => {
    return db.userPacks.put(pack)
}
const dbPutActualPack = (pack, key) => {
    return db.actualPacks.put(pack)
}
//Update
const dbUpdateHangar = (key, obj) => {
    return db.hangars.update(key, obj)
}

const dbUpdatePack = (key, obj) => {
    return db.userPacks.update(key, obj)
}

export {
    db,
    seedManus,
    seedShips,
    dbPutUserPack,
    dbGetUserPack,
    dbGetAllUserPacks,
    dbPutShip,
    dbGetUserShip,
    dbGetAllUserShips,
    dbUpdatePack,
    dbPutActualHangar,
    dbGetHangar,
    dbUpdateHangar,
    dbGetActualShips,
    dbGetActualPacks,
    dbGetActualCCUs,
    dbGetActualItems,
    dbPutActualPack,
    dbGetUserHangar,
    dbGetUserPacks,
}
