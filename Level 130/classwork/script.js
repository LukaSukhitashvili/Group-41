
// arrow function example:

console.log("arrow function example: ");
let greet = name => {
    console.log(`hello ${name}`);
}
greet("luka");

console.log("               ")


// destructing example: 
console.log("destructing examples: ");

let person = {
    name: "luka",
    age: 15,
    country: "georgia",
    city: "gori",
    hobbies: {
        hobby1: "watching optimus prime",
        hobby2: "swimming",
        hobby3: "programming"
    }
}


let {name, age, country, city, hobbies: {hobby1, hobby2, hobby3}} = person;
console.log(name, age, country, city, hobby1, hobby2, hobby3);

console.log("               ")


// destructing example: 2

let fruits = ["apple", "orange", "banana"];

let [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

console.log("               ")


// object enchancement example: 

console.log("object enchancement example: ");

let name1 = "luka";
let age1 = 15;

let person1 = {
    name1,
    age1,
    info() {
        console.log(`my name is ${this.name1} and i am ${this.age1} years old`);
    }
}

console.log(person1);
person1.info();

console.log("               ")


// for in / for of example: 
console.log("for in / for of example: ");

let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
    console.log(number);
}

for (let number in numbers) {
    console.log(numbers[number]);
}

let person2 = {
    name: "luka",
    age: 15,
    country: "georgia"
}

for (let key in person2) {
    console.log(person2[key]);
}

console.log("               ")

// default parameter example: 
console.log("default parameter example: ");

function greet1(name = "luka") {
    console.log(`hello ${name}`);
}

greet1();