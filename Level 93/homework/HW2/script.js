let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
let dailyRun = Number(prompt("Enter daily running distance (km):"));
let workoutDays = Number(prompt("Enter number of workout days per week (0-7):"));

if (age < 16) {
    console.log("Please consult a doctor.");
} else if (age > 60) {
    console.log("Please consult a doctor.");
}

let weeklyDistance = dailyRun * workoutDays;

if (weeklyDistance < 20) {
    console.log("You might need more exercise.");
}