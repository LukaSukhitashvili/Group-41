let car = { make: "bmw", model: "m5", year: 2020 }

for (let prop in car) {
  console.log(prop + ": " + car[prop])
}
