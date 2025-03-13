function showClassList() {
    const box = document.getElementById('myBox');
    const classListDiv = document.getElementById('classList');
    let classes = [];
    
    for (let i = 0; i < box.classList.length; i++) {
        classes.push(`${i}: ${box.classList.item(i)}`);
    }
    
    classListDiv.textContent = classes.join('\n');
}