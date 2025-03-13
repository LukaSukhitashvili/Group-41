// ფუნქცია, რომელიც ცვლის ფერებს
// Function that changes colors
function changeColors() {
    const box = document.getElementById('box1');
    box.style.backgroundColor = '#e3f2fd';
    box.style.color = '#1565c0';
    box.style.borderColor = '#1565c0';
}

// ფუნქცია, რომელიც ახდენს ტრანსფორმაციას
// Function that applies transformation
function transform() {
    const box = document.getElementById('box2');
    box.style.transform = 'rotate(5deg) scale(1.1)';
    box.style.backgroundColor = '#f3e5f5';
    box.style.borderColor = '#7b1fa2';
}

// ფუნქცია, რომელიც ანიმაციას უკეთებს ჩარჩოს
// Function that animates the border
function animateBorder() {
    const box = document.getElementById('box3');
    box.style.borderWidth = '3px';
    box.style.borderStyle = 'dashed';
    box.style.borderColor = '#4caf50';
    box.style.backgroundColor = '#e8f5e9';
}

// ფუნქცია, რომელიც აბრუნებს საწყის სტილს
// Function that resets styles
function resetStyles() {
    const boxes = document.getElementsByClassName('style-target');
    for (let box of boxes) {
        box.style = '';
    }
}

/* 
JavaScript-ით სტილის მანიპულაციის დანიშნულება:
- საშუალებას გვაძლევს დინამიურად შევცვალოთ ელემენტების სტილი
- შეგვიძლია გამოვიყენოთ ანიმაციებისთვის
- მარტივად შეგვიძლია დავამატოთ/წავშალოთ CSS თვისებები

Purpose of JavaScript Style Manipulation:
- Allows dynamic modification of element styles
- Can be used for animations
- Easy to add/remove CSS properties
*/