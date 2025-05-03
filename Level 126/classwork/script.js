let oldObject = {
    name: "Sukhita",
    age: 15,
    info: function() {
        console.log(`my name is ${this.name} and i am ${this.age} years old`);
    }
}

const name1 = "Sukhita";
const age1 = 15;

const newObject = {
    name1,
    age1,
    info() {
        console.log(`my name is ${this.name1} and i am ${this.age1} years old`);
    }
}

console.log(oldObject)
oldObject.info(); 

console.log("                 ");
console.log(newObject);
newObject.info()


/* პირველში პირდაპირ გამოვიყენეთ property მიუხედავათ იმისა რომ მუშაობს გაუმჯობესებულ object - ში გვაქვს მნიშვნელობები ცვლადების დახმარებით ანუ ეს 
არის გლობალური ცვლადები რომელიც შეგვიძლია გამოვიყენოთ სხვა object - ებშიც
*/
