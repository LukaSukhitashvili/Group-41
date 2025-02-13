function removeLastElement(array) {
    let removedElement = array.pop();
    console.log("Removed element:", removedElement);
    console.log("Updated array:", array);
}

removeLastElement([1, 2, 3, 4]);
