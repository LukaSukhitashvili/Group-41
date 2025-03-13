let greeting = document.querySelector('#greeting');
let reminderMinutes = document.querySelector('#reminderMinutes');
let reminder = document.querySelector('#reminder');
let schedule = document.querySelector('#schedule');

function updateGreeting() {
    let now = new Date();
    let hour = now.getHours();
    let greetingText = '';
    
    if (hour < 12) {
        greetingText = 'Good morning!';
        greeting.style.backgroundColor = '#fff3cd';
        greeting.style.color = '#856404';
    } else if (hour < 18) {
        greetingText = 'Good afternoon!';
        greeting.style.backgroundColor = '#cce5ff';
        greeting.style.color = '#004085';
    } else {
        greetingText = 'Good evening!';
        greeting.style.backgroundColor = '#d4edda';
        greeting.style.color = '#155724';
    }
    
    greeting.textContent = greetingText;
}

function setReminder() {
    let minutes = Number(reminderMinutes.value);
    reminder.textContent = 'Reminder set for ' + minutes + ' minute(s) from now';
    
    setTimeout(function() {
        reminder.textContent = 'Time for your reminder!';
        reminder.style.backgroundColor = '#fff3cd';
        reminder.style.color = '#856404';
    }, minutes * 60 * 1000);
}

function showSchedule() {
    let now = new Date();
    let day = now.getDay();
    let scheduleText = '';
    
    if (day === 0) scheduleText = 'Sunday: Rest day';
    if (day === 1) scheduleText = 'Monday: Start of the week';
    if (day === 2) scheduleText = 'Tuesday: Regular day';
    if (day === 3) scheduleText = 'Wednesday: Mid-week';
    if (day === 4) scheduleText = 'Thursday: Almost weekend';
    if (day === 5) scheduleText = 'Friday: Last work day';
    if (day === 6) scheduleText = 'Saturday: Weekend';
    
    schedule.textContent = scheduleText;
} 