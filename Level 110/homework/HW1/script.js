let element = document.getElementById('original');
let textResult = document.getElementById('innerTextResult');
let htmlResult = document.getElementById('innerHTMLResult');

textResult.innerText = 'innerText result: ' + element.innerText;
htmlResult.innerHTML = 'innerHTML result: ' + element.innerHTML;