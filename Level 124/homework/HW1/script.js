let users = [
    { name: "giorgi", email: "giorgi@example.com" },
    { name: "nino", email: "nino@example.com" },
    { name: "luka", email: "luka@example.com" },
    { name: "mariam", email: "mariam@example.com" }
]

let formattedEmails = users.map(user => `<${user.email}>`)

console.log("original users:", users)
console.log("formatted emails:", formattedEmails)
