let items = ['🌞', '🌙', '⭐', '🌍', '🌈'];
let currentIndex = 0;

function updateDisplay() {
    document.getElementById('slider').textContent = items[currentIndex];
}

function move(direction) {
    if (direction === 'right') {
        currentIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    } else {
        currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    }
    updateDisplay();
}

window.onload = () => {
    updateDisplay();
};
