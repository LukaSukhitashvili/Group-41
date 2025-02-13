function calculateSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    console.log("Sum of all numbers:", sum);
}

calculateSum([1, 2, 3, 4, 5]);
