let image = document.getElementById('changeableImage');
let changeImageBtn = document.getElementById('changeImageBtn');

changeImageBtn.onclick = function() {
    if (image.src.includes('image1.jpg')) {
        image.src = 'image2.jpg';
        image.alt = 'Image 2';
    } else {
        image.src = 'image1.jpg';
        image.alt = 'Image 1';
    }
}; 