let people = [
    {name: "Alice"},
    {name: "Bob"}
];
let places = [
    {city: "London"},
    {city: "Paris"}
];

let mergedArray = people.concat(places);
console.log(mergedArray);

mergedArray.copyWithin(2, 0, 2);
console.log(mergedArray);

let newCity = {city: "New York"};
mergedArray.fill(newCity, 2, 4);
console.log(mergedArray);

mergedArray.pop();
console.log(mergedArray);

mergedArray.shift();
console.log(mergedArray);

mergedArray.unshift({name: "Charlie"}, {name: "David"});
console.log(mergedArray);
