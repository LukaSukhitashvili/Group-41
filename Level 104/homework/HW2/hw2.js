let students = ["John", "Alice", "Bob"];
let grades = [85, 92, 78];

console.log(students);
console.log(grades);

students.unshift("Emma");
grades.unshift(95);
console.log(students);
console.log(grades);

students.pop();
grades.pop();
console.log(students);
console.log(grades);

grades.splice(1, 1, 88);
console.log(grades);

grades.fill(90);
console.log(grades);
