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

console.log("car1 model:", car1.model)
car1.displayInfo()

console.log("car2 model:", car2.model)
car2.displayInfo()
