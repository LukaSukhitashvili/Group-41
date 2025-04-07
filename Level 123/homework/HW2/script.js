let strings = ["apple", "banana", "kiwi", "strawberry", "orange"]
let hasLongString = strings.some(str => str.length > 5)
console.log("does the array have at least one string longer than 5 characters?", hasLongString)

let shortStrings = ["apple", "kiwi", "pear", "fig"]
let hasLongStringShort = shortStrings.some(str => str.length > 5)
console.log("does the short strings array have at least one string longer than 5 characters?", hasLongStringShort)
