function simple_calculator(num1, num2, operation) {
    if (operation === "add") {
        return num1 + num2;
    } else if (operation === "subtract") {
        return num1 - num2;
    } else if (operation === "multiply") {
        return num1 * num2;
    } else if (operation === "divide") {
        if (num2 === 0) {
            return "Error: Division by zero is not possible";
        } else {
            return num1 / num2;
        }
    } else {
        return "Error: Unknown operation";
    }
}

console.log(simple_calculator(10, 5, "add"));
console.log(simple_calculator(10, 5, "subtract")); 
console.log(simple_calculator(10, 5, "multiply")); 
console.log(simple_calculator(10, 5, "divide")); 
console.log(simple_calculator(10, 0, "divide")); 
console.log(simple_calculator(10, 5, "unknown")); 