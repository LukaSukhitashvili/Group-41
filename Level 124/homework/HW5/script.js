let studentData = [
    {
        id: 1,
        name: "ana",
        grades: {
            math: [85, 90, 92],
            science: [80, 85, 88],
            history: [75, 82, 80]
        },
        attendance: [true, true, false, true, true, true, true, false, true, true],
        extracurricular: ["chess club", "debate team", "math olympiad"]
    },
    {
        id: 2,
        name: "giorgi",
        grades: {
            math: [95, 98, 99],
            science: [90, 92, 95],
            history: [88, 90, 92]
        },
        attendance: [true, true, true, true, true, true, true, true, true, false],
        extracurricular: ["soccer team", "debate team", "science fair"]
    },
    {
        id: 3,
        name: "nino",
        grades: {
            math: [65, 70, 68],
            science: [60, 65, 67],
            history: [75, 78, 80]
        },
        attendance: [false, false, true, false, true, true, false, true, false, true],
        extracurricular: ["art club"]
    },
    {
        id: 4,
        name: "davit",
        grades: {
            math: [78, 82, 85],
            science: [82, 85, 88],
            history: [90, 92, 95]
        },
        attendance: [true, true, true, true, false, true, true, true, true, true],
        extracurricular: ["debate team", "history club"]
    },
    {
        id: 5,
        name: "mariam",
        grades: {
            math: [100, 98, 100],
            science: [95, 96, 98],
            history: [92, 95, 98]
        },
        attendance: [true, true, true, true, true, true, true, true, true, true],
        extracurricular: ["chess club", "math olympiad", "science fair"]
    },
    {
        id: 6,
        name: "luka",
        grades: {
            math: [60, 65, 62],
            science: [68, 70, 72],
            history: [70, 72, 75]
        },
        attendance: [false, true, false, true, false, true, false, true, false, true],
        extracurricular: []
    }
]

// task 1: greet each student using forEach
console.log("task 1: greeting each student")
studentData.forEach(student => {
    console.log(`hello, ${student.name}!`)
})

// task 2: create array of student names using map
console.log("\ntask 2: student names")
let studentNames = studentData.map(student => student.name)
console.log(studentNames)

// task 3: calculate average grades for each student
console.log("\ntask 3: student averages")
let studentAverages = studentData.map(student => {
    // calculate average for each subject
    let totalSum = 0
    let totalCount = 0
    
    for (let subject in student.grades) {
        let subjectSum = student.grades[subject].reduce((sum, grade) => sum + grade, 0)
        let subjectAvg = subjectSum / student.grades[subject].length
        totalSum += subjectSum
        totalCount += student.grades[subject].length
    }
    
    let overallAverage = totalSum / totalCount
    
    return {
        name: student.name,
        average: overallAverage
    }
})
console.log(studentAverages)

// task 4: filter high performing students
console.log("\ntask 4: high performing students")
let highPerformingStudents = studentAverages.filter(student => student.average >= 85)
console.log(highPerformingStudents)

// task 5: filter struggling students
console.log("\ntask 5: struggling students")
let strugglingStudents = studentData.filter(student => {
    // check if any subject has all scores below 70
    for (let subject in student.grades) {
        if (student.grades[subject].every(score => score < 70)) {
            return true
        }
    }
    return false
})
console.log(strugglingStudents.map(student => student.name))

// task 6: calculate total extracurricular activities
console.log("\ntask 6: total extracurricular activities")
let totalActivities = studentData.reduce((total, student) => total + student.extracurricular.length, 0)
console.log(totalActivities)

// task 7: find subject with highest average score
console.log("\ntask 7: subject with highest average score")
let subjectAverages = {}

// calculate average for each subject across all students
studentData.forEach(student => {
    for (let subject in student.grades) {
        if (!subjectAverages[subject]) {
            subjectAverages[subject] = {
                sum: 0,
                count: 0
            }
        }
        
        student.grades[subject].forEach(grade => {
            subjectAverages[subject].sum += grade
            subjectAverages[subject].count++
        })
    }
})

// calculate the average for each subject
let highestAvg = 0
let highestSubject = ""

for (let subject in subjectAverages) {
    let average = subjectAverages[subject].sum / subjectAverages[subject].count
    if (average > highestAvg) {
        highestAvg = average
        highestSubject = subject
    }
}

console.log(`subject with highest average: ${highestSubject} (${highestAvg.toFixed(2)})`)

// task 8: create string of debate team members in reverse order
console.log("\ntask 8: debate team members in reverse order")
let debateTeamMembers = studentData
    .filter(student => student.extracurricular.includes("debate team"))
    .map(student => student.name)
    .reduceRight((result, name, index, array) => {
        if (index === 0) {
            return result + name
        } else {
            return result + " and " + name
        }
    }, "")

console.log(debateTeamMembers)

// task 9: check if all students have good attendance
console.log("\ntask 9: check attendance")
let allHaveGoodAttendance = studentData.every(student => {
    let presentCount = student.attendance.filter(present => present).length
    let attendanceRate = presentCount / student.attendance.length
    return attendanceRate >= 0.5
})
console.log(`all students have good attendance: ${allHaveGoodAttendance}`)

// task 10: check if any student has no extracurricular activities
console.log("\ntask 10: check for inactive students")
let hasInactiveStudent = studentData.some(student => student.extracurricular.length === 0)
console.log(`has inactive student: ${hasInactiveStudent}`)

// task 11: congratulate students with perfect scores
console.log("\ntask 11: congratulate students with perfect scores")
studentData.forEach(student => {
    for (let subject in student.grades) {
        if (student.grades[subject].some(grade => grade === 100)) {
            console.log(`congratulations, ${student.name}, for achieving a perfect score in ${subject}!`)
        }
    }
})
