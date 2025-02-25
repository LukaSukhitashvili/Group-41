let name = prompt("Please enter your name:");
let age = Number(prompt("Please enter your age:"));
let distance = Number(prompt("Please enter the distance to your workplace in kilometers:"));
let workDays = Number(prompt("Please enter the number of workdays per week (0 to 7):"));

if (age < 16) {
    console.log("Please request travel permission from a supervisor.");
} else if (age >= 16 && age < 65) {
    let transport;
    if (distance >= 0 && distance <= 5) {
        transport = "bicycle";
    } else if (distance > 5 && distance <= 20) {
        transport = "car";
    } else if (distance > 20) {
        transport = "train";
    } else {
        console.log("Invalid distance. Please enter a valid value.");
    }

    if (transport) {
        console.log(`Recommended transport is: ${transport}`);
    }

    if (workDays >= 5) {
        console.log("You are eligible for transport benefits.");
    }
} else {
    console.log("No transport recommendation is provided for your age.");
}