function getCurrentTime() {
  return new Date().toLocaleTimeString()
}

function greet(name, time = getCurrentTime()) {
  return "hello " + name + ", the current time is " + time
}

let greeting1 = greet("nino")
console.log(greeting1)

setTimeout(() => {
  let greeting2 = greet("luka")
  console.log(greeting2)
}, 2000)
