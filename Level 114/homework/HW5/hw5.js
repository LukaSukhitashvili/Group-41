let checkAnswerBtn = document.getElementById('checkAnswerBtn');
let result = document.getElementById('result');

checkAnswerBtn.onclick = function() {
    let selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedAnswer) {
        result.textContent = 'გთხოვთ აირჩიოთ პასუხი';
        result.style.color = 'orange';
        return;
    }

    if (selectedAnswer.value === 'tbilisi') {
        result.textContent = 'სწორია! თბილისი არის საქართველოს დედაქალაქი';
        result.style.color = 'green';
    } else {
        result.textContent = 'არასწორია, სცადეთ თავიდან';
        result.style.color = 'red';
    }
}; 