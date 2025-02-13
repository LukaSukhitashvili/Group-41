function combineAndAdd(array1, array2, newElement) {
    let combinedArray = array1.concat(array2);
    combinedArray.push(newElement);
    console.log(combinedArray);
}

combineAndAdd([1, 2], [3, 4], 5);
