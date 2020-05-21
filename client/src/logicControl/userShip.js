class userShip {
  constructor(
    name = "Ship",
    manufacturer = "Manufacturer",
    role = "Personal Transport",
    size = "Small",
    currentPrice = 0,
    userPrice = 0,
    subName = ""
  ) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.role = role;
    this.currentPrice = currentPrice;
    this.userPrice = currentPrice;
    this.subName = subName;
  }
}

// var Ship = new Schema({
//   name: String,
//   manufacturer: String,
//   role: String,
//   currentPrice: { type: Number, default: 0 },
//   userPrice: { type: Number, default: 0 },
//   subName: { type: String, default: "" },
// });
