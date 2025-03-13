let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]
let arr3 = [11, 12, 13, 14, 15]

let mergedArray =  arr1.concat(arr1, arr2);

mergedArray.copyWithin(5, 0, 3);

mergedArray.fill(0, 6);

// remove the last elemnt from mergedArray using the pop method
mergedArray.pop();

// remove the first element from mergedArray using the shift method
mergedArray.shift();

// add the elements 100 and 200 to the beginning of mergedArray using the unshift method
mergedArray.unshift(100, 200);

// use the splice method to remove the elements at indices 2 and 3, and replace them with the elements of arr3
mergedArray.splice(2, 2, 11, 12, 13, 14, 15);
