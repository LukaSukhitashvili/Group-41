let getFullName = ({ firstName, lastName = "doe" }) => `${firstName} ${lastName}`

console.log(getFullName({ firstName: "john", lastName: "smith" }))
console.log(getFullName({ firstName: "jane" }))
