function checkNumber(num) {
    if (num > 0) {
        return "Positive number";
    } else if (num < 0) {
        return "Negative number";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(5));
console.log(checkNumber(-3));
console.log(checkNumber(0));
