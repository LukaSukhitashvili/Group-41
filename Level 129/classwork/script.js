function sumNumbers(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    return numbers.reduce((total, sum) => total + sum)
}

console.log(sumNumbers(1,2 ,3 ,4 ,5));