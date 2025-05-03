function multiply(a, b = 2) {
  return a * b
}

let result1 = multiply(5)
let result2 = multiply(5, 3)

console.log("5 * 2 =", result1)
console.log("5 * 3 =", result2)
