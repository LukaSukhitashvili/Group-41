class car {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }
}

let myCar = new car("bmw", "m5", 2020)
console.log("car created with properties:", myCar)
