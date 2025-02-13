function getEvenIndexedElements(array) {
    let evenIndexArray = [];
    for (let i = 0; i < array.length; i += 2) {
        evenIndexArray.push(array[i]);
    }
    console.log(evenIndexArray);
}

getEvenIndexedElements(['a', 'b', 'c', 'd', 'e']);
