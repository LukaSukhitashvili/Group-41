function combineArrays(str, ...arrays) {
    let result = [str]
    
    for (let array of arrays) {
        for (let item of array) {
            result.push(item)
        }
    }
    
    return result
}

let result = combineArrays("combined data", [1, 2], ["a", "b"], [true, false])
console.log("result:", result)
