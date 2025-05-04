let fruitsMap = new Map()

fruitsMap.set("apple", "red")
fruitsMap.set("banana", "yellow")
fruitsMap.set("kiwi", "green")

let fruitsArray = Array.from(fruitsMap)
console.log(fruitsArray)

let newFruitsMap = new Map(fruitsArray)
console.log(newFruitsMap)
