for (let i = 1; i <= 30; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    if (i % 8 === 0) {
        break;
    }
    console.log(i);
}