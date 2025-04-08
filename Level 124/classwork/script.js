let products = [
    { name: "laptop", price: 1200 },
    { name: "smartphone", price: 800 },
    { name: "tablet", price: 300 },
    { name: "headphones", price: 150 },
    { name: "mouse", price: 25 },
    { name: "keyboard", price: 50 }
]

let productNames = products.map(product => product.name);
console.log("product names: ", productNames);

console.log("                            ")

let affordableProducts = products.filter(product => product.price < 100);
console.log("affordable products: ", affordableProducts);

console.log("                            ")

let totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log("total price: ", totalPrice);

console.log("                            ")

let productNamesReversed = products.reduceRight((result, product) => {
    if (result === "") {
        return product.name;
    } else {
        return result + " - " + product.name;
    }
}, "");

console.log("product names reversed: ", productNamesReversed);