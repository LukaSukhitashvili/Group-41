let myInfo = {
    name: "luka",
    lastName: "sukhitashvili",
    age: 15,
    country: "georgia",
    city: "gori",
    hobbies: {
        hobby1: "programming",
        hobby2: "swimming"
    }
}


let carInfo = {
    brand: "bmw",
    model: "m5",
    year: 2024,
    color: "black",
    price: 1000000
}

let {name, lastName, age, country, city, hobbies: {hobby1, hobby2}} = myInfo;
let {brand, model, year, color, price} = carInfo;
console.log("my info: ")

console.log(name, lastName, age, country, city, hobby1, hobby2);

console.log(name)
console.log(lastName)
console.log(age)
console.log(country)
console.log(city)
console.log(hobby1)
console.log(hobby2)

console.log("               ")

console.log("car info: ")

console.log(brand, model, year, color, price);
console.log(brand)
console.log(model)
console.log(year)
console.log(color)
console.log(price)

