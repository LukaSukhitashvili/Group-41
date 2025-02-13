let university = {
    name: "Georgian University",
    departments: 8,
    website: "www.geouni.ge",
    ratings: {
        student1: 85,
        student2: 92,
        student3: 78
    }
};


console.log(university);

console.log(university.hasOwnProperty('scholarship'));

let newUniversity = {
    studentsCount: 15000
}
Object.assign(university, newUniversity);

Object.freeze(university);
university.name = "New Name";

console.log(Object.isFrozen(university));
