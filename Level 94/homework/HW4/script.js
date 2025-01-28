function financialPlanning(age, gender, income) {
    if (age >= 18) {
        if (gender === "female") {
            if (income > 5000) {
                console.log("Your financial condition is secure.");
            } else if (income > 3000) {
                console.log("Financial position is stable. A better plan is needed.");
            } else {
                console.log("You need to improve your financial plan.");
            }
        } else if (gender === "male") {
            if (income > 6000) {
                console.log("You are ready for investments!");
            } else if (income > 4000) {
                console.log("Income is stable.");
            } else {
                console.log("You need to improve your financial plan.");
            }
        }
    } else {
        console.log("Get an education and then start investing.");
    }
}