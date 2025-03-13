let countdownInput = document.querySelector('#countdownInput');
let countdown = document.querySelector('#countdown');
let progressBar = document.querySelector('#progressBar');
let status = document.querySelector('#status');
let taskMinutes = document.querySelector('#taskMinutes');
let taskStatus = document.querySelector('#taskStatus');
let intervalSeconds = document.querySelector('#intervalSeconds');
let intervalDisplay = document.querySelector('#intervalDisplay');
let countdownInterval;
let intervalTimer;

function startCountdown() {
    let seconds = Number(countdownInput.value);
    let totalSeconds = seconds;
    countdown.textContent = seconds;
    progressBar.style.width = '100%';
    status.textContent = '';
    
    countdownInterval = setInterval(function() {
        seconds = seconds - 1;
        countdown.textContent = seconds;
        
        let progress = (seconds / totalSeconds) * 100;
        progressBar.style.width = progress + '%';
        
        if (seconds <= 0) {
            clearInterval(countdownInterval);
            status.textContent = 'Countdown complete!';
            status.style.color = '#4CAF50';
        }
    }, 1000);
}

function scheduleTask() {
    let minutes = Number(taskMinutes.value);
    let now = new Date();
    let scheduledTime = new Date(now.getTime() + minutes * 60 * 1000);
    
    taskStatus.textContent = 'Task scheduled for ' + scheduledTime.toLocaleTimeString();
    
    setTimeout(function() {
        taskStatus.textContent = 'Task completed!';
        taskStatus.style.color = '#4CAF50';
    }, minutes * 60 * 1000);
}

function startIntervalTimer() {
    let seconds = Number(intervalSeconds.value);
    let count = 0;
    
    intervalTimer = setInterval(function() {
        count = count + 1;
        intervalDisplay.textContent = 'Interval ' + count + ' completed';
        
        setTimeout(function() {
            intervalDisplay.textContent = 'Waiting for next interval...';
        }, 500);
    }, seconds * 1000);
}

function stopIntervalTimer() {
    clearInterval(intervalTimer);
    intervalDisplay.textContent = 'Timer stopped';
let countdownInput = document.querySelector('#countdownInput');
let countdown = document.querySelector('#countdown');
let progressBar = document.querySelector('#progressBar');
let status = document.querySelector('#status');
let taskMinutes = document.querySelector('#taskMinutes');
let taskStatus = document.querySelector('#taskStatus');
let intervalSeconds = document.querySelector('#intervalSeconds');
let intervalDisplay = document.querySelector('#intervalDisplay');
let countdownInterval;
let intervalTimer;

function startCountdown() {
    let seconds = Number(countdownInput.value);
    let totalSeconds = seconds;
    countdown.textContent = seconds;
    progressBar.style.width = '100%';
    status.textContent = '';
    
    countdownInterval = setInterval(function() {
        seconds--;
        countdown.textContent = seconds;
        
        let progress = (seconds / totalSeconds) * 100;
        progressBar.style.width = `${progress}%`;
        
        if (seconds <= 0) {
            clearInterval(countdownInterval);
            status.textContent = 'Countdown complete!';
            status.className = 'success';
        }
    }, 1000);
}

function scheduleTask() {
    let minutes = Number(taskMinutes.value);
    let now = new Date();
    let scheduledTime = new Date(now.getTime() + minutes * 60 * 1000);
    
    taskStatus.textContent = `Task scheduled for ${scheduledTime.toLocaleTimeString()}`;
    
    setTimeout(function() {
        taskStatus.textContent = 'Task completed!';
        taskStatus.className = 'success';
    }, minutes * 60 * 1000);
}

function startIntervalTimer() {
    let seconds = Number(intervalSeconds.value);
    let count = 0;
    
    intervalTimer = setInterval(function() {
        count++;
        intervalDisplay.textContent = `Interval ${count} completed`;
        
        setTimeout(function() {
            intervalDisplay.textContent = 'Waiting for next interval...';
        }, 500);
    }, seconds * 1000);
}

function stopIntervalTimer() {
    clearInterval(intervalTimer);
    intervalDisplay.textContent = 'Timer stopped';
    intervalDisplay.className = 'error';
} 