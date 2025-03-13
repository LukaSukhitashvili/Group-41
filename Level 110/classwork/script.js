let h1 = document.getElementById('headerOne');
let h2 = document.getElementsByClassName('headerTwo');
let h3 = document.getElementsByTagName('h3');

h1.style.color = 'red';
h1.style.fontSize = '50px';
h1.style.fontFamily = 'Cursive';
h1.style.backgroundColor = 'yellow';

h2[0].style.color = 'blue';
h2[0].style.fontSize = '40px';
h2[0].style.fontFamily = 'Arial';
h2[0].style.backgroundColor = 'green';

h3[0].style.color = 'green';
h3[0].style.fontSize = '30px';
h3[0].style.fontFamily = 'Verdana';
h3[0].style.backgroundColor = 'blue';

h1.innerHTML = "changed content of h1";
h2[0].innerHTML = "changed content of h2";
h3[0].innerHTML = "changed content of h3";