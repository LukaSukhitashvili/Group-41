function filterAndSum(threshold, ...numbers) {
    let filteredNumbers = numbers.filter(num => num > threshold)
    let sum = filteredNumbers.reduce((total, num) => total + num, 0)
    return sum
}

let result = filterAndSum(5, 1, 6, 2, 8, 3, 9)
console.log("result:", result)
