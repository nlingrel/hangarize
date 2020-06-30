import Dexie from 'dexie'
import manuSeed from './manuSeed'
import shipSeed from './shipSeed'

const db = new Dexie('hangarize')
db.version(1).stores({
    defaultShips: 'id, name, manufacturer, role, size, defaultPrice, userPrice',
    defaultItems: 'id, name, price',
    defaultManufacturers: 'id, name, nickName',
    ships:
        '++id, name, manufacturer, role, price, size, shipHangarId, shipPackId, buyback, toName, toPrice',
    items:
        '++id, name, price, meltable, itemHangarId, itemPackId, itemShipId, buyback',
    manufacturers: '++id, name, nickName',
    packs: '++id, name, packHangarId, buyback',
    hangars: '++id, name, total, credit, tax',
    buybacks: '++id, name',
    ccus: '++id, base, to, appliedBase, appliedTo, price, ccuHangarId, buyback',
})

db.on('populate', () => {
    db.hangars.add({
        id: 1,
        name: 'Actual',
        total: 0,
        credit: 0,
        tax: 0,
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
const dbGetHangars = (keys) => {
    return db.hangars.bulkGet(keys)
}
const dbGetAllHangars = () => {
    return db.hangars.toCollection().toArray()
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
    return db.packs.where({ packHangarId: hangarId }).toArray()
}

const dbGetShip = (key) => {
    return db.userShips.get(key)
}
const dbGetShips = (keys) => {
    return db.ships.bulkGet(keys)
}

const dbGetAllShips = (hangarId) => {
    return db.ships.where({ shipHangarId: hangarId }).toArray()
}

const dbGetItems = (keys) => {
    return db.items.bulkGet(keys)
}

const dbGetAllItems = (hangarId) => {
    return db.items.where({ itemHangarId: hangarId }).toArray()
}

const dbGetAllCCUs = (hangarId) => {
    return db.ccus.where({ ccuHangarId: hangarId }).toArray()
}

const dbGetCCUs = (keys) => {
    return db.ccus.bulkGet(keys)
}

// Put
const dbPutHangar = (hangar) => {
    return db.hangars.put(hangar)
}
const dbPutPack = (pack) => {
    return db.packs.put(pack)
}
const dbPutPacks = (packs) => {
    return db.packs.bulkPut(packs)
}
const dbPutShip = (ship, key) => {
    return db.ships.put(ship)
}
const dbPutShips = (ships) => {
    return db.ships.bulkPut(ships)
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
const dbPutCCUs = (ccus) => {
    return db.ccus.bulkPut(ccus)
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

const dbUpdateItem = (key, obj) => {
    return db.items.update(key, obj)
}

const dbUpdateCCU = (key, obj) => {
    return db.ccus.update(key, obj)
}
const dbUpdateBuyback = (key, obj) => {
    return db.buybacks.update(key, obj)
}

//Delete
const dbDeleteHangar = (key) => {
    return db.hangars.delete(key)
}
const dbDeletePack = (key) => {
    return db.packs.delete(key)
}
const dbDeletePacks = (keys) => {
    return db.packs.bulkDelete(keys)
}
const dbDeleteAllPacks = (hangarId) => {
    return db.packs.where({ packHangarId: hangarId })
}
const dbDeleteShip = (key) => {
    return db.ships.delete(key)
}
const dbDeleteShips = (keys) => {
    return db.ships.bulkDelete(keys)
}
const dbDeleteAllShips = (hangarId) => {
    return db.ships.where({ shipHangarId: hangarId }).delete()
}
const dbDeleteItem = (key) => {
    return db.items.delete(key)
}
const dbDeleteItems = (keys) => {
    return db.items.bulkDelete(keys)
}
const dbDeleteAllItems = (hangarId) => {
    return db.items.where({ itemHangarId: hangarId })
}
const dbDeleteCCU = (key) => {
    return db.ccus.delete(key)
}
const dbDeleteCCUs = (keys) => {
    return db.ccus.bulkDelete(keys)
}
const dbDeleteAllCCUs = (hangarId) => {
    return db.ccus.where({ ccuHangarId: hangarId }).delete()
}

export {
    db,
    seedManus,
    seedShips,
    dbGetHangar,
    dbGetHangars,
    dbGetAllHangars,
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
    dbPutPacks,
    dbPutShip,
    dbPutShips,
    dbPutItem,
    dbPutItems,
    dbPutCCU,
    dbPutCCUs,
    dbPutHangar,
    dbPutActualHangar,
    dbUpdateHangar,
    dbUpdateShip,
    dbUpdatePack,
    dbUpdateItem,
    dbUpdateCCU,
    dbUpdateBuyback,
    dbDeleteHangar,
    dbDeletePack,
    dbDeletePacks,
    dbDeleteShip,
    dbDeleteShips,
    dbDeleteItem,
    dbDeleteItems,
    dbDeleteCCU,
    dbDeleteCCUs,
}
