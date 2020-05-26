import Dexie from 'dexie'
import manuSeed from './manuSeed'
import shipSeed from './shipSeed'

const db = new Dexie('hangarize')
db.version(1).stores({
    defaultShips: 'id, name, manufacturer, role, size, defaultPrice, userPrice',
    defaultItems: 'id, name, price',
    defaultManufacturers: 'id, name, nickName',
    userShips: '++id, name, manu, role, price',
    userItems: '++id, name, price',
    userManufacturers: '++id, name, nickName',
    packs: '++id, name',
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

export { db, seedManus, seedShips }
