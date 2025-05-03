function greet(name = "guest") {
  return "hello, " + name
}

let greeting1 = greet()
let greeting2 = greet(undefined)
let greeting3 = greet("giorgi")

console.log(greeting1)
console.log(greeting2)
console.log(greeting3)
