let textContainer = document.getElementById('textContainer');
let toggleBtn = document.getElementById('toggleBtn');

toggleBtn.onclick = function() {
    if (textContainer.style.display === 'none') {
        textContainer.style.display = 'block';
    } else {
        textContainer.style.display = 'none';
    }
}; 