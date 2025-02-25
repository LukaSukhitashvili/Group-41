let array1 = [1, 2, 3, 4, 5]
let array2 = [6, 7, 8, 9, 10]

let concatArray = array1.concat(array2)
console.log(concatArray);

concatArray.copyWithin(8, 0, 2);
console.log(concatArray);

concatArray.fill(0, 7, 10)
console.log(concatArray);

let lastElement =  concat.pop()
console.log(lastElement);

let firstElement = concat.shift()
console.log(firstElement);


concatArray.unshift(10, 20)

function modifyArray(array1, array2) {
    let result = array1.concat(array2);
    result.copyWithin(8, 0, 2)
    result.fill(0, 7, 10)
    result.pop()
    result.shift()
    result.unshift(10, 20)
    return result
}
