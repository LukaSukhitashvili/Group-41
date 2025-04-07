let car = {
    brand: 'BMW',
    model: 'X5',
    color: 'black',
}


console.log('Car properties:');
for(let info in car) {
    console.log(info);
}

console.log("                   ")

console.log('Car values:');
for(let info in car) {
    console.log(car[info]);
}

console.log("                   ")


console.log('combined information:');
console.log(`this is a ${car.brand} brand, its model is ${car.model}, which is ${car.color} in color.`);

