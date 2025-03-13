let currentDateTime = document.querySelector('#currentDateTime');
let birthdateInput = document.querySelector('#birthdate');
let ageResult = document.querySelector('#ageResult');
let dateInput = document.querySelector('#dateInput');
let dayResult = document.querySelector('#dayResult');

function updateDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    
    currentDateTime.textContent = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}

setInterval(updateDateTime, 1000);
updateDateTime();

function calculateAge() {
    let birthdate = new Date(birthdateInput.value);
    let today = new Date();
    
    let years = today.getFullYear() - birthdate.getFullYear();
    ageResult.textContent = 'Age: ' + years + ' years';
}

function showDayOfWeek() {
    let date = new Date(dateInput.value);
    let day = date.getDay();
    let dayName = '';
    
    if (day === 0) dayName = 'Sunday';
    if (day === 1) dayName = 'Monday';
    if (day === 2) dayName = 'Tuesday';
    if (day === 3) dayName = 'Wednesday';
    if (day === 4) dayName = 'Thursday';
    if (day === 5) dayName = 'Friday';
    if (day === 6) dayName = 'Saturday';
    
    dayResult.textContent = dayName;
} 