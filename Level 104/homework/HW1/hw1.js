let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = [11, 12, 13];

let mergedArray = arr1.concat(arr2);
console.log(mergedArray);

mergedArray.copyWithin(5, 0, 3);
console.log(mergedArray);

mergedArray.fill(0, 6);
console.log(mergedArray);

mergedArray.pop();
console.log(mergedArray);

mergedArray.shift();
console.log(mergedArray);

mergedArray.unshift(100, 200);
console.log(mergedArray);

mergedArray.splice(2, 2, arr3[0], arr3[1], arr3[2]);
console.log(mergedArray);

let slicedArray = mergedArray.slice(-5);
console.log(slicedArray);

let result = slicedArray.join(",");
console.log(result);
