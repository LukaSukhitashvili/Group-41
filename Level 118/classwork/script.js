let temperature = document.getElementById('temperature');
let unit = document.getElementById('unit');
let resultDiv = document.getElementById('result');

function convertTemperature() {
    if (temperature.value === '') {
        resultDiv.innerHTML = 'please enter a temperature';
        return;
    }

    if (unit.value === 'C' || unit.value === 'c') {
        let fahrenheit = (temperature.value * 9/5) + 32;
        resultDiv.innerHTML = temperature.value + 'C = ' + fahrenheit.toFixed(2) + 'F';
    } else if (unit.value === 'F' || unit.value === 'f') {
        let celsius = (temperature.value - 32) * 5/9;
        resultDiv.innerHTML = temperature.value + 'F = ' + celsius.toFixed(2) + 'C';
    } else {
        resultDiv.innerHTML = 'please enter c or f for unit';
    }
}