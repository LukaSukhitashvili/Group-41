function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
    function introduce() {
        console.log(`Hi, im ${this.name}, a ${this.age} year old, and my profession is ${this.profession}`);
    }
}