let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let evenNumbers = numbers.filter(num => num % 2 === 0)
let squaredEvens = evenNumbers.map(num => num * num)

console.log("original numbers:", numbers)
console.log("even numbers:", evenNumbers)
console.log("squared even numbers:", squaredEvens)
