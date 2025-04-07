let prices = {
    apple: 2,
    banana: 1.5,
    orange: 3,
    grapes: 4.5,
    watermelon: 7
}

let sum = 0

for (let product in prices) {
    sum += prices[product]
}

console.log("total price: " + sum)
