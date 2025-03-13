let colorBox = document.getElementById('colorBox');
let changeColorBtn = document.getElementById('changeColorBtn');

changeColorBtn.onclick = function() {
    let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
}; 