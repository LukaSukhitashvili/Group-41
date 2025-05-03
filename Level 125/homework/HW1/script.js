let users = [
    { id: 1, name: "giorgi" },
    { id: 2, name: "nino" },
    { id: 3, name: "luka" },
    { id: 4, name: "mariam" }
]

let userWithId3 = users.find(user => user.id === 3)

console.log("all users:", users)
console.log("user with id 3:", userWithId3)
