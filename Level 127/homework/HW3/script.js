let student = {
  name: "luka",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    english: 92
  }
}

let { grades: { math, english } } = student

console.log("math grade:", math)
console.log("english grade:", english)
