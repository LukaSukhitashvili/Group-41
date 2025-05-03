let product = {
    id: 101,
    name: "laptop",
    price: 1200,
    brand: "techcorp",
    color: "silver",
    weight: "2kg"
}

let { id, name, ...details } = product

console.log("id:", id)
console.log("name:", name)
console.log("details:", details)
