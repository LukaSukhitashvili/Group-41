let items = [
    { name: "laptop", price: 1200, quantity: 1 },
    { name: "phone", price: 800, quantity: 2 },
    { name: "headphones", price: 100, quantity: 3 },
    { name: "mouse", price: 30, quantity: 5 }
]

let totalValue = items.reduce((total, item) => total + (item.price * item.quantity), 0)

console.log("items:", items)
console.log("total value:", totalValue)
