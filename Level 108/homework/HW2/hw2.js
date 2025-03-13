let counter = document.querySelector('#counter');
let currentTime = document.querySelector('#currentTime');
let randomNumber = document.querySelector('#randomNumber');
let counterInterval;
let timeInterval;
let randomInterval;

function startCounter() {
    let count = 0;
    counterInterval = setInterval(function() {
        count = count + 1;
        counter.textContent = count;
    }, 1000);
}

function stopCounter() {
    clearInterval(counterInterval);
}

function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    
    currentTime.textContent = hours + ':' + minutes + ':' + seconds;
}

timeInterval = setInterval(updateTime, 1000);
updateTime();

function updateRandomNumber() {
    let num = Math.random();
    num = Math.round(num * 100) / 100;
    randomNumber.textContent = num;
}

randomInterval = setInterval(updateRandomNumber, 1000);
updateRandomNumber(); 