let name = "giorgi"
let age = 25
let city = "tbilisi"

console.log("example 1: property shorthand")
let person = { name, age, city }
console.log(person)

console.log("example 2: method shorthand")
let calculator = {
    x: 10,
    y: 5,
    add() {
        return this.x + this.y
    },
    subtract() {
        return this.x - this.y
    },
    multiply() {
        return this.x * this.y
    }
}
console.log("addition:", calculator.add())
console.log("subtraction:", calculator.subtract())
console.log("multiplication:", calculator.multiply())

console.log("example 3: computed property names")
let propertyName = "favorite"
let category = "color"
let preferences = {
    [propertyName + category]: "blue",
    [`${propertyName} food`]: "khachapuri",
    [`${propertyName} place`]: "batumi"
}
console.log(preferences)

console.log("example 4: combining with destructuring")
let student = {
    firstName: "nino",
    lastName: "kalandadze",
    grades: [85, 92, 78]
}

let { firstName, lastName, grades } = student
let studentSummary = {
    fullName: `${firstName} ${lastName}`,
    grades,
    average() {
        return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length
    }
}
console.log(studentSummary)
console.log("average grade:", studentSummary.average())

console.log("example 5: combining multiple objects")
let personalInfo = {
    name: "luka",
    age: 28
}

let contactInfo = {
    email: "luka@example.com",
    phone: "555-123-456"
}

let addressInfo = {
    city: "kutaisi",
    street: "rustaveli avenue",
    number: 42
}

let completeProfile = Object.assign(
    {},
    personalInfo,
    contactInfo,
    addressInfo,
    {isActive: true}
)
console.log(completeProfile)
