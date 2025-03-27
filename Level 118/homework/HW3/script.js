function changeColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    
    let colorString = `rgb(${red}, ${green}, ${blue})`;
    let colorBox = document.getElementById('colorBox');
    
    colorBox.style.backgroundColor = colorString;
    colorBox.textContent = colorString;
}
