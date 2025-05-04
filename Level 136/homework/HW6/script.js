function sortMapByKeys(inputMap) {
  let sortedKeys = Array.from(inputMap.keys()).sort()

  let sortedMap = new Map()

  for (let key of sortedKeys) {
    sortedMap.set(key, inputMap.get(key))
  }

  return sortedMap
}

let fruitsMap = new Map()
fruitsMap.set("apple", "red")
fruitsMap.set("banana", "yellow")
fruitsMap.set("kiwi", "green")
fruitsMap.set("peach", "pink")

let sortedFruitsMap = sortMapByKeys(fruitsMap)
console.log(sortedFruitsMap)
