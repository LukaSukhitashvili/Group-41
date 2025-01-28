function checkResult(age, score) {
    let result = age >= 18
        ? score > 50
            ? "You are successful."
            : "You need to study more."
        : "You are a child, but you can still succeed.";
    console.log(result);
}