let counter = document.getElementById('counter');
let incrementBtn = document.getElementById('incrementBtn');

incrementBtn.onclick = function() {
    let currentNumber = parseInt(counter.textContent);
    counter.textContent = currentNumber + 1;
}; 