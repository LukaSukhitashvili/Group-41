let nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flatArray = nestedArray.flat();
console.log(flatArray);

let fullyFlatArray = nestedArray.flat(Infinity);
console.log(fullyFlatArray);

function checkElement(array, value) {
    if (array.includes(value)) {
        return true;
    } else {
        return false;
    }
    
}
console.log(checkElement(flatArray, 5))

function findIndexOfelement(array, value) {
    return array.indexOf(value);
}

console.log(findIndexOfelement(flatArray, 5));

function findLastIndexOfElement(array, value) {
    return array.lastIndexOf(value);
}

console.log(findLastIndexOfElement(flatArray, 5));

