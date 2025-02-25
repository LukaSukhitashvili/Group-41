let mixedArray = [1, "two", 3, "four", 5];
console.log(mixedArray);

let boolArray = [true, false];
let extendedArray = mixedArray.concat(boolArray);
console.log(extendedArray);

extendedArray.copyWithin(0, 2, 4);
console.log(extendedArray);

extendedArray.fill(0, 4, 7);
console.log(extendedArray);

extendedArray.pop();
console.log(extendedArray);

extendedArray.shift();
console.log(extendedArray);

extendedArray.unshift(null, undefined);
console.log(extendedArray);
