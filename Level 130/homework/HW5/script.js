let product = {
  id: 101,
  details: {
    name: "laptop",
    price: 1200
  }
}

let { details: { name: productName, price: productPrice } } = product

console.log("product name:", productName)
console.log("product price:", productPrice)
