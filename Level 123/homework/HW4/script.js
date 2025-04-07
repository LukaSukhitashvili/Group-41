let users = [
    { name: "john", age: 25 },
    { name: "jane", age: 30 },
    { name: "bob", age: 20 },
    { name: "alice", age: 22 }
]

let allAdults = users.every(user => user.age >= 18)
console.log("are all users 18 or older?", allAdults)

let mixedAgeUsers = [
    { name: "john", age: 25 },
    { name: "jane", age: 30 },
    { name: "bob", age: 16 },
    { name: "alice", age: 22 }
]

let allAdultsMixed = mixedAgeUsers.every(user => user.age >= 18)
console.log("are all users in the mixed age group 18 or older?", allAdultsMixed)
