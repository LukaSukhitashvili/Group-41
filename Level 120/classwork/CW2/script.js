let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi']


console.log('Fruits: ');
for(info in fruits) {
    console.log(fruits[info]);
}

console.log("                   ")

console.log('Fruits index: ');
for (info in fruits) {
    console.log(info);
}

console.log("                   ")

for (info in fruits) {
    console.log(`this is ${fruits[info]} and its index is ${info}`);
}

