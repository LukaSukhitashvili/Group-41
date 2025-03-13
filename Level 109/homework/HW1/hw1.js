let prices = [98.99, 15.2, 20, 1026];
let result = document.querySelector('#result');
let input = document.querySelector('#increase');
let button = document.querySelector('#increaseBtn');

button.onclick = function() {
    let increase = Number(input.value);
    
    for(let i = 0; i < prices.length; i++) {
        prices[i] = prices[i] + increase;
    }
    
    result.textContent = prices;
} 