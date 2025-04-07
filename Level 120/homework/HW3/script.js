let mixedData = {
    name: "data",
    count: 42,
    isActive: true,
    score: 95.5,
    level: 3,
    tags: ["important", "new"],
    completed: false
}

for (let key in mixedData) {
    if (typeof mixedData[key] === "number") {
        console.log(key + ": " + mixedData[key])
    }
}
