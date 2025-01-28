function financialPlanningSwitch(age, gender, income) {
    switch (true) {
        case (age < 18):
            console.log("Get an education and then start investing.");
            break;
        case (gender === "female" && income > 5000):
            console.log("Your financial condition is secure.");
            break;
        case (gender === "female" && income > 3000):
            console.log("Financial position is stable. A better plan is needed.");
            break;
        case (gender === "female" && income <= 3000):
            console.log("You need to improve your financial plan.");
            break;
        case (gender === "male" && income > 6000):
            console.log("You are ready for investments!");
            break;
        case (gender === "male" && income > 4000):
            console.log("Income is stable.");
            break;
        case (gender === "male" && income <= 4000):
            console.log("You need to improve your financial plan.");
            break;
        default:
            console.log("Invalid input.");
    }
}