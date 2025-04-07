let products = [
    { name: "laptop", price: 1200 },
    { name: "phone", price: 800 },
    { name: "tablet", price: 300 },
    { name: "headphones", price: 150 },
    { name: "mouse", price: 15 }
]

let hasAffordableProduct = products.some(product => product.price < 20)
console.log("is there at least one product under $20?", hasAffordableProduct)

let expensiveProducts = [
    { name: "laptop", price: 1200 },
    { name: "phone", price: 800 },
    { name: "tablet", price: 300 },
    { name: "headphones", price: 150 },
    { name: "mouse", price: 25 }
]

let hasAffordableExpensive = expensiveProducts.some(product => product.price < 20)
console.log("is there at least one product under $20 in the expensive products?", hasAffordableExpensive)
