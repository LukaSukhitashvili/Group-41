function getStringLengths(strings) {
    let lengthArray = [];
    for (let i = 0; i < strings.length; i++) {
        lengthArray.push(strings[i].length);
    }
    console.log(lengthArray);
}

getStringLengths(['hello', 'world', 'javascript']);
