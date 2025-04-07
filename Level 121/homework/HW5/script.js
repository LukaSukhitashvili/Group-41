let executeFunction = (func = () => 10) => func()

let returnfive = () => 5

console.log(executeFunction(returnfive))
console.log(executeFunction())
