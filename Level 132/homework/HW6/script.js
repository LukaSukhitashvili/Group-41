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

let myCar = new car("bmw", "m5", 2020)
myCar.displayInfo()
