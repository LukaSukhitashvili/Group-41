let courses = [
    {
        id: "CS101",
        name: "introduction to computer science",
        isActive: true,
        students: [
            { id: 1, name: "giorgi", grades: [85, 90, 92] },
            { id: 2, name: "nino", grades: [75, 82, 78] },
            { id: 3, name: "luka", grades: [95, 91, 89] }
        ],
        capacity: 30,
        credits: 3
    },
    {
        id: "MA201",
        name: "calculus",
        isActive: true,
        students: [
            { id: 1, name: "giorgi", grades: [70, 65, 68] },
            { id: 4, name: "mariam", grades: [90, 92, 94] },
            { id: 5, name: "tamari", grades: [60, 58, 62] }
        ],
        capacity: 25,
        credits: 4
    },
    {
        id: "EN110",
        name: "english composition",
        isActive: false,
        students: [
            { id: 2, name: "nino", grades: [88, 84, 89] },
            { id: 3, name: "luka", grades: [72, 78, 75] },
            { id: 6, name: "daviti", grades: [62, 68, 65] }
        ],
        capacity: 35,
        credits: 3
    },
    {
        id: "PH202",
        name: "physics",
        isActive: true,
        students: [
            { id: 1, name: "giorgi", grades: [80, 85, 82] },
            { id: 4, name: "mariam", grades: [95, 98, 97] },
            { id: 7, name: "nikolozi", grades: [65, 70, 68] }
        ],
        capacity: 20,
        credits: 4
    }
]

let studentNamesString = "giorgi,nino,luka,mariam,tamari,daviti,nikolozi"
console.log("is courses an array?", Array.isArray(courses))
console.log("is studentNamesString an array?", Array.isArray(studentNamesString))

let allStudentNames = Array.from(studentNamesString.split(","))
console.log("all student names array:", allStudentNames)

console.log("\ncourse information:")
courses.forEach(course => {
    console.log(`course id: ${course.id}, name: ${course.name}`)
})

let courseNames = courses.map(course => course.name)
console.log("\ncourse names:", courseNames)

let courseAverages = courses.map(course => {
    let totalGrades = course.students.reduce((sum, student) => {
        let studentGradeSum = student.grades.reduce((gradeSum, grade) => gradeSum + grade, 0)
        return sum + studentGradeSum
    }, 0)

    let totalGradeCount = course.students.length * course.students[0].grades.length

    return {
        id: course.id,
        averageGrade: totalGrades / totalGradeCount
    }
})
console.log("\ncourse averages:", courseAverages)
let activeCourses = courses.filter(course => course.isActive)
console.log("\nactive courses:", activeCourses.map(course => course.name))

let calculusCourse = courses.find(course => course.id === "MA201")
console.log("\ncalculus course:", calculusCourse)

console.log("\nstudent grade checks:")
courses.forEach(course => {
    let allStudentsHaveGoodGrade = course.students.every(student =>
        student.grades.some(grade => grade >= 70)
    )
    console.log(`in ${course.name}, all students have at least one grade of 70+: ${allStudentsHaveGoodGrade}`)
})

let hasSmallClass = courses.some(course => course.capacity < 30)
console.log("\nis there at least one course with capacity less than 30?", hasSmallClass)

let coursesByCapacity = [...courses].sort((a, b) => a.capacity - b.capacity)
console.log("\ncourses sorted by capacity (ascending):",
    coursesByCapacity.map(course => `${course.name} (capacity: ${course.capacity})`))

coursesByCapacity.reverse()
console.log("\ncourses sorted by capacity (descending):",
    coursesByCapacity.map(course => `${course.name} (capacity: ${course.capacity})`))

let totalActiveCredits = activeCourses.reduce((sum, course) => sum + course.credits, 0)
console.log("\ntotal credits from active courses:", totalActiveCredits)

let reversedActiveCoursesString = activeCourses.reduceRight((str, course, index) =>
    index === 0 ? str + course.name : str + " - " + course.name
, "")
console.log("\nactive courses in reverse order:", reversedActiveCoursesString)
