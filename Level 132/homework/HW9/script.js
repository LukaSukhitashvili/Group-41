class person {
  constructor(name, age = 30) {
    this.name = name
    this.age = age
  }
  
  introduce() {
    console.log(`hi, my name is ${this.name} and i am ${this.age} years old.`)
  }
}

let person1 = new person("giorgi", 25)
let person2 = new person("nino")

console.log("person with specified age:")
person1.introduce()

console.log("person with default age:")
person2.introduce()
