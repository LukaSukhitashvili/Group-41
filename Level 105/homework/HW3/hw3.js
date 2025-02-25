let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

let arr2 = [60, 70, 80];
let combined = numbers.concat(arr2);
console.log(combined);

numbers.copyWithin(3, 1, 3);
console.log(numbers);

numbers.fill(100, 0, 3);
console.log(numbers);

let lastElement = numbers.pop();
console.log(lastElement);
console.log(numbers);

let firstElement = numbers.shift();
console.log(firstElement);
console.log(numbers);

numbers.unshift(5, 15);
console.log(numbers);

let joinedString = numbers.join("-");
console.log(joinedString);

let slicedArray = numbers.slice(1, 3);
console.log(slicedArray);

numbers.splice(1, 2, 200, 300);
console.log(numbers);

let nestedArr = [1, [2, 3], [4, [5, 6]]];
let flatArray = nestedArr.flat(Infinity);
console.log(flatArray);

let has50 = numbers.includes(50);
console.log(has50);

let index30 = numbers.indexOf(30);
console.log(index30);

let lastIndex20 = numbers.lastIndexOf(20);
console.log(lastIndex20);

numbers.push(90, 100);
console.log(numbers);
