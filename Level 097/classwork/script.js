let car = {
    brand: "toyota",
    model: "corolla",
    year: 2020,
    color: "black",
    weight: 2000,
    fullInfo() {
        return `this car is a ${this.brand} specific model is ${this.model} and it was made in ${this.year} and it is ${this.color} and it weights ${this.weight} kg.`
    }
}

console.log(car.brand)
console.log(car.model)
console.log(car.year)
console.log(car.color)
console.log(car.weight)

car.brand = "ford"
car.model = "focus"
car.year = 2021
car.color = "blue"
car.weight = 1500
 
car.mode = "sport"

delete car.mode

let brand = prompt("რა მანქანა გყავს ბრატ: ")

if (car.brand === "ford") {
    console.log("იგივე მანქანის ბრენდი გვყოლია ძმობილო")

} else {
    console.log("სხვადასხვა მანქანის ბრენდია, ჩემი მოუგებს")
}
