let students = [
    { name: "luka", grade: 95 },
    { name: "giorgi", grade: 85},
    { name: "nino", grade: 75 },
    { name: "mariam", grade: 68 },
    { name: "davit", grade: 92 },
    { name: "ana", grade: 88 },
    { name: "nikoloz", grade: 63 },
    { name: "salome", grade: 98 },
    { name: "irakli", grade: 72},
    { name: "tamari", grade: 82 }
]



let allPassing = students.every(student => student.grade >= 70);
console.log(allPassing);

console.log("                          ")

let hasFailing = students.some(student => student.grade < 65);
console.log(hasFailing);

console.log("                          ")

console.log("student names: ");
students.forEach(student => {
    console.log(`Student: ${student.name}`);
})

console.log("                          ")

let honorRoll = [];
students.forEach(student => {
    if (student.grade >= 90) {
        honorRoll.push(student.name);
    }
});

console.log("honor Roll:", honorRoll);