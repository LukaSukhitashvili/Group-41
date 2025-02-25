let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let nestedArray = [[1, 2], [3, 4], [5, 6, [7, 8, 9]]];

console.log(arr1);
console.log(arr2);
console.log(nestedArray);

let combinedArray = arr1.concat(arr2);
console.log(combinedArray);

combinedArray.copyWithin(5, 0, 3);
console.log(combinedArray);

combinedArray.fill(0, 6);
console.log(combinedArray);

combinedArray.pop();
console.log(combinedArray);

combinedArray.shift();
console.log(combinedArray);

combinedArray.unshift(100, 200);
console.log(combinedArray);

combinedArray.splice(2, 2, "x", "y", "z");
console.log(combinedArray);

let slicedArray = combinedArray.slice(-5);
console.log(slicedArray);

let joinedString = slicedArray.join(",");
console.log(joinedString);

let flatArray = nestedArray.flat(Infinity);
console.log(flatArray);

let includes8 = flatArray.includes(8);
console.log(includes8);

let indexOf9 = flatArray.indexOf(9);
console.log(indexOf9);

let lastIndexOf7 = flatArray.lastIndexOf(7);
console.log(lastIndexOf7);
