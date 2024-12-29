let userName1 = prompt("User 1, enter your name:");
let userName2 = prompt("User 2, enter your name:");

let length1 = userName1.length;
let length2 = userName2.length;

console.log("User 1's name is longer:", length1 > length2);
console.log("User 2's name is longer:", length2 > length1);
console.log("Both names are of equal length:", length1 == length2);