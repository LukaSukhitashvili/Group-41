class car {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }
  
  displayInfo() {
    console.log(`this is a ${this.year} ${this.make} ${this.model}.`)
  }
}

let car1 = new car("bmw", "m5", 2020)
let car2 = new car("mercedes", "c63", 2019)

console.log("created two car instances:")
console.log("car1:", car1)
console.log("car2:", car2)
