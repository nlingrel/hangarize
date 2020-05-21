import Dexie from "dexie";

const db = new Dexie("hangarize");
db.version(1).stores({
  ships: "++id",
  manufacturers: "++id",
  items: "++id",
  userShips: "++id",
  userItems: "++id",
  userManufacturers: "++id",
  userHangars: "++id",
  userHomeHangar: "++id",
});

export default db;
