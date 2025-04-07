function even_odd1(num) {
    if (num % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
}

console.log(even_odd1(10))



let even_odd2 = function (num) {
    if (num % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
}

console.log(even_odd2(11))



let even_odd3 = (num) => num % 2 === 0 ? "even" : "odd";

console.log(even_odd3(12))