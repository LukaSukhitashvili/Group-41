function changeText() {
    let box = document.getElementById('textContent');
    let oldText = box.innerText;
    box.innerText = 'Current time: ' + new Date().toLocaleTimeString() + ' Original text was: ' + oldText;
    box.style.backgroundColor = '#e8f5e9';
    box.style.color = '#2e7d32';
}