function toggleHighlightClass() {
    const target = document.getElementById('target');
    target.classList.toggle('highlight');
}

function checkHighlightClass() {
    const target = document.getElementById('target');
    const status = document.getElementById('status');
    const hasClass = target.classList.contains('highlight');
    status.textContent = hasClass ? 'The element has the highlight class' : 'The element does not have the highlight class';
}