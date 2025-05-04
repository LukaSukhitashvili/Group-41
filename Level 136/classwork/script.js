let generally = new Map()

generally.set("string", "luka")
generally.set("integer", 1.5)
generally.set("float", 15.5)
generally.set("boolean", true)
generally.set("array", [1, 2, 3])



console.log(generally.get("string"))
console.log(generally.get("integer"))
console.log(generally.get("float"))
console.log(generally.get("boolean"))
console.log(generally.get("array"))

console.log('                     ')

console.log(generally.has("string"))
console.log(generally.has("integer"))
console.log(generally.has("float"))
console.log(generally.has("boolean"))
console.log(generally.has("array"))

console.log('                     ')

generally.delete("string")

console.log('                     ')

console.log(generally.has("string"))
console.log(generally.has("integer"))

