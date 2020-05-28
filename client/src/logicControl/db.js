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
    userPacks: '++id, name',
    hangars: '++id, name',
    actualHangar: '++id',
    actualBuyback: '++id',
})

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
const dbPutShip = (ship, key) => {
    return db.userShips.put(ship)
}
const dbPutPack = (pack, key) => {
    return db.userPacks.put(pack)
}

const dbGetAllUserPacks = () => {
    return db.userPacks.toCollection().toArray()
}

const dbGetAllUserShips = () => {
    return db.userShips.toCollection().toArray()
}

export {
    db,
    seedManus,
    seedShips,
    dbPutPack,
    dbGetAllUserPacks,
    dbPutShip,
    dbGetAllUserShips,
}
