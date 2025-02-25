function user(name, lastName, phoneNum, email, password, confirmPass) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNum = phoneNum;
    this.email = email;
    this.password = password;
    this.confirmPass = confirmPass;
}

let person1 = new user("Luka", "Sukhitashvili", "599-12-34-56","sukhitaluka@gmail.com", "123456", "123456");

let person2 = new user("Optimus", "Prime", "555-55-55-55","optimusprime@gmail.com", "654321", "654321");

let person3 = new user("Davit", "Janezashvili", "555-44-33-22","davitjanezashvili@gmail.com", "987654", "987654");


console.log("my name is", person1.name, person1.lastName, "my phone number is", person1.phoneNum, "my email is", person1.email, "my password is", person1.password, "my confirm password is", person1.confirmPass);

console.log("my name is", person2.name, person2.lastName, "my phone number is", person2.phoneNum, "my email is", person2.email, "my password is", person2.password, "my confirm password is", person2.confirmPass);

console.log("my name is", person3.name, person3.lastName, "my phone number is", person3.phoneNum, "my email is", person3.email, "my password is", person3.password, "my confirm password is", person3.confirmPass);


