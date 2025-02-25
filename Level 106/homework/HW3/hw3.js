var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var remainingNumbers = [];
var result = [];

for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    
    if (num % 3 == 0 && num % 5 == 0) {
        result.push("FizzBuzz");
    } else if (num % 3 == 0) {
        result.push("Fizz");
    } else if (num % 5 == 0) {
        result.push("Buzz");
    } else {
        remainingNumbers.push(num);
    }
}

console.log("საწყისი მასივი:", numbers);
console.log("დარჩენილი რიცხვები:", remainingNumbers);
console.log("Fizz/Buzz/FizzBuzz:", result);
