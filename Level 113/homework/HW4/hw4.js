function toggleHighlight() {
    const box = document.getElementById('myBox');
    box.classList.toggle('highlight');
}

function checkHighlight() {
    const box = document.getElementById('myBox');
    const status = document.getElementById('status');
    
    // Check if the element has the highlight class using classList.contains()
    if (box.classList.contains('highlight')) {
        status.textContent = 'The box has the highlight class!';
        status.style.color = '#2e7d32';
    } else {
        status.textContent = 'The box does not have the highlight class.';
        status.style.color = '#c62828';
    }
}