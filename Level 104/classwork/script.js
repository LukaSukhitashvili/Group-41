let fruits = ["apple", "orange", "banana", "kiwi", "mango"];

let citrus = fruits.slice(1, 3);
console.log(citrus);

fruits.splice(3, 4, "fig");
console.log(fruits);

let fruitString = fruits.join(" - ");

function processFruits(fruit) {
    let citrus = fruits.slice(1, 3);

    fruits.splice(3, 4, "fig");

    let fruitString = fruits.join(" - ");
}

processFruits(["apple", "orange", "banana", "kiwi", "mango"]);

