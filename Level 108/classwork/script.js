// let date = new Date();
// console.log("Full Date: " + date);

// let year = date.getFullYear();
// let month = date.getMonth();
// let day = date.getDate();
// let weekDay = date.getDay();
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let milliseconds = date.getMilliseconds();

// console.log("Current year: " + year);
// console.log("Current month: " + month);
// console.log("Current day: " + day);
// console.log("Current week day: " + weekDay);
// console.log("Current hours: " + hours);
// console.log("Current minutes: " + minutes);
// console.log("Current seconds: " + seconds);
// console.log("Current milliseconds: " + milliseconds);

// date.setFullYear(2022);
// date.setMonth(11);
// date.setDate(31);
// date.setHours(23);
// date.setMinutes(59);
// date.setSeconds(59);
// date.setMilliseconds(999);

// console.log('------------');

// console.log("Full Date: " + date);

// console.log("Current year: " + date.getFullYear());
// console.log("Current month: " + date.getMonth());
// console.log("Current day: " + date.getDate());
// console.log("Current week day: " + date.getDay());
// console.log("Current hours: " + date.getHours());
// console.log("Current minutes: " + date.getMinutes());
// console.log("Current seconds: " + date.getSeconds());
// console.log("Current milliseconds: " + date.getMilliseconds());


function sayHi() {
    console.log("Hello");
}
function sayBye() {
    console.log("Bye");
}

setTimeout(sayHi, 1000);
console.log("---------");
setTimeout(sayBye, 2000);
setTimeout(() => console.log("sigma"), 3000);


