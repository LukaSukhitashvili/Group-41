let delayedMessage = document.querySelector('#delayedMessage');
let countdownInput = document.querySelector('#countdownInput');
let countdown = document.querySelector('#countdown');
let colorBox = document.querySelector('#colorBox');

function showDelayedMessage() {
    delayedMessage.textContent = '';
    setTimeout(function() {
        delayedMessage.textContent = 'This message appeared after 2 seconds!';
        delayedMessage.style.backgroundColor = '#d4edda';
        delayedMessage.style.color = '#155724';
    }, 2000);
}

function startCountdown() {
    let seconds = Number(countdownInput.value);
    countdown.textContent = seconds;
    
    let timer = setInterval(function() {
        seconds = seconds - 1;
        countdown.textContent = seconds;
        
        if (seconds <= 0) {
            clearInterval(timer);
            countdown.textContent = 'Time\'s up!';
            countdown.style.backgroundColor = '#f8d7da';
            countdown.style.color = '#721c24';
        }
    }, 1000);
}

function changeColor() {
    let colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    let currentIndex = 0;
    
    setTimeout(function() {
        currentIndex = currentIndex + 1;
        if (currentIndex >= colors.length) {
            currentIndex = 0;
        }
        colorBox.style.backgroundColor = colors[currentIndex];
    }, 1000);
} 