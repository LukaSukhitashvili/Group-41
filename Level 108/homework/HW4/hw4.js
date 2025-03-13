let timeDisplay = document.querySelector('#timeDisplay');
let stopwatch = document.querySelector('#stopwatch');
let timerInput = document.querySelector('#timerInput');
let timer = document.querySelector('#timer');
let clockInterval;
let stopwatchInterval;
let timerInterval;
let stopwatchTime = 0;
let timerTime = 0;

function toggleClock() {
    if (clockInterval) {
        clearInterval(clockInterval);
        clockInterval = null;
    } else {
        updateClock();
        clockInterval = setInterval(updateClock, 1000);
    }
}

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    
    timeDisplay.textContent = hours + ':' + minutes + ':' + seconds;
}

function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchTime = 0;
    updateStopwatchDisplay();
}

function updateStopwatch() {
    stopwatchTime = stopwatchTime + 1;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    let hours = Math.floor(stopwatchTime / 3600);
    let minutes = Math.floor((stopwatchTime % 3600) / 60);
    let seconds = stopwatchTime % 60;
    
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    
    stopwatch.textContent = hours + ':' + minutes + ':' + seconds;
}

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    timerTime = Number(timerInput.value);
    updateTimerDisplay();
    
    timerInterval = setInterval(function() {
        timerTime = timerTime - 1;
        updateTimerDisplay();
        
        if (timerTime <= 0) {
            clearInterval(timerInterval);
            timer.textContent = 'Time\'s up!';
        }
    }, 1000);
}

function updateTimerDisplay() {
    let minutes = Math.floor(timerTime / 60);
    let seconds = timerTime % 60;
    
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    
    timer.textContent = minutes + ':' + seconds;
} 