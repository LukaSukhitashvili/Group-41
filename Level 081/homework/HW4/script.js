let user1Number1 = prompt("User 1, enter your first number:");
let user1Number2 = prompt("User 1, enter your second number:");

let user2Number1 = prompt("User 2, enter your first number:");
let user2Number2 = prompt("User 2, enter your second number:");

user1Number1 = Number(user1Number1);
user1Number2 = Number(user1Number2);
user2Number1 = Number(user2Number1);
user2Number2 = Number(user2Number2);

console.log("User 1 - Addition:", user1Number1 + user1Number2);
console.log("User 1 - Subtraction:", user1Number1 - user1Number2);
console.log("User 1 - Multiplication:", user1Number1 * user1Number2);
console.log("User 1 - Division:", user1Number1 / user1Number2);

console.log("User 2 - Addition:", user2Number1 + user2Number2);
console.log("User 2 - Subtraction:", user2Number1 - user2Number2);
console.log("User 2 - Multiplication:", user2Number1 * user2Number2);
console.log("User 2 - Division:", user2Number1 / user2Number2);