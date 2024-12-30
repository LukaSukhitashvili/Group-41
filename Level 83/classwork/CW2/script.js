let num1 = Number(prompt("Enter a First Number: "));
let num2 = Number(prompt("Enter a Second Number: "));
let operation = prompt("Enter an Operation: ");

if (operation === "+") {
    console.log(num1 + num2);
} else if (operation === "-") {
    console.log(num1 - num2);
} else if (operation === "*") {
    console.log(num1 * num2);
} else if (operation === "/") {
    if (num2 === 0) {
        console.log("Division by zero is not allowed.");
    } else {
        console.log(num1 / num2);
    }
} else {
    console.log("Invalid Operation");
}