function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
}

console.log("Year 2000:", isLeapYear(2000));
console.log("Year 2100:", isLeapYear(2100));
console.log("Year 2024:", isLeapYear(2024));
console.log("Year 2023:", isLeapYear(2023));
