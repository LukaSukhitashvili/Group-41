function isTriangle(a, b, c) {
    if (a + b > c && b + c > a && c + a > b) {
        console.log("These sides can form a triangle.");
    } else {
        console.log("These sides cannot form a triangle.");
    }
}