let student = {
    name: "Luka",
    age: 15,
    grade: 9,
    isEnrolled: true,
    getInfo: function() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}, Enrolled: ${this.isEnrolled}`;
    }
}


student.grade = 10;

console.log(student.getInfo());