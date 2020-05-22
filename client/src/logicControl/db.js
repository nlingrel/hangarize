import Dexie from 'dexie'

const db = new Dexie('hangarize')
db.version(1).stores({
    ships: '++id, name, manufacturer, role, price',
    items: '++id, name, price',
    manufacturers: '++id, name',
    packs: '++id, name',
    hangars: '++id, name',
    actualHangar: '++id',
    actualBuyback: '++id',
})

export default db
