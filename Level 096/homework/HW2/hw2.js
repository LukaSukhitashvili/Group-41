let students = {
    studentName: "Luka",
    studentAge: 21,
    studentFaculty: "Computer Science",
    studentCourse: 3,
    averageScore: 85
}

console.log(students.studentName);
console.log(students.studentAge);
console.log(students.studentFaculty);
console.log(students.studentCourse);
console.log(students.averageScore);

console.log(students["studentName"]);
console.log(students["studentAge"]);
console.log(students["studentFaculty"]);
console.log(students["studentCourse"]);
console.log(students["averageScore"]);

console.log(`${students.studentName} is ${students.studentAge} years old, studies ${students.studentFaculty}, is in course ${students.studentCourse}, and has an average score of ${students.averageScore}.`);
