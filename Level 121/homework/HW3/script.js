let sumArray = (arr = [1, 2, 3]) => {
    let sum = 0
    for (let num of arr) {
        sum += num
    }
    return sum
}

console.log(sumArray([4, 5, 6]))
console.log(sumArray([]))
console.log(sumArray())
