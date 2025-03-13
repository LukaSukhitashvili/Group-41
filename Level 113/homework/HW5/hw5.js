function replaceTheme() {
    const box = document.getElementById('myBox');
    const status = document.getElementById('status');
    
    // Check current theme and replace it with the opposite theme
    if (box.classList.contains('theme-light')) {
        // Replace light theme with dark theme
        box.classList.replace('theme-light', 'theme-dark');
        status.textContent = 'Current theme: Dark';
    } else {
        // Replace dark theme with light theme
        box.classList.replace('theme-dark', 'theme-light');
        status.textContent = 'Current theme: Light';
    }
}