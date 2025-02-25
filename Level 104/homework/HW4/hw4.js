let cartItems = ["Apple", "Banana", "Orange"];
let prices = [1.99, 0.99, 0.79];

console.log(cartItems);
console.log(prices);

cartItems.unshift("Mango");
prices.unshift(2.49);
console.log(cartItems);
console.log(prices);

cartItems.shift();
prices.shift();
console.log(cartItems);
console.log(prices);

cartItems.splice(1, 1, "Grape");
prices.splice(1, 1, 1.49);
console.log(cartItems);
console.log(prices);

let receipt = cartItems.join(", ");
console.log(receipt);

prices.fill(0.99);
console.log(prices);
