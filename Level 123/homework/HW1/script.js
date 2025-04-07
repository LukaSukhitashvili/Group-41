let numbers = [2, 4, 6, 8, 10]
let allEven = numbers.every(num => num % 2 === 0)
console.log("are all numbers even?", allEven)

let mixedNumbers = [2, 4, 5, 8, 10]
let allEvenMixed = mixedNumbers.every(num => num % 2 === 0)
console.log("are all numbers in mixed array even?", allEvenMixed)
