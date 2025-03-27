function changeNumber(amount) {
    let counter = document.getElementById('counter');
    let currentValue = +counter.textContent;
    currentValue += amount;
    counter.textContent = currentValue;
}
