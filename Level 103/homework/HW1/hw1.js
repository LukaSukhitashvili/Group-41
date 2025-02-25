let numsArray = [1, 2, 3, 4, 5];
let strArray = ["one", "two", "three", "four", "five"];
console.log(numsArray);
console.log(strArray);

let combinedArray = numsArray.concat(strArray);
console.log(combinedArray);

combinedArray.copyWithin(4, 0, 3);
console.log(combinedArray);

combinedArray.fill("filled", 2, 4);
console.log(combinedArray);

combinedArray.pop();
console.log(combinedArray);

combinedArray.shift();
console.log(combinedArray);

combinedArray.unshift(100, 200);
console.log(combinedArray);
