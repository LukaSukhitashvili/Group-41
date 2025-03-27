let button = document.getElementById('button');
let inner = document.getElementById('inner');
let outer = document.getElementById('outer');

button.addEventListener('click', e => {
    console.log('button clicked');
});

inner.addEventListener('click', e => {
    console.log('inner clicked');
});

outer.addEventListener('click', e => {
    console.log('outer clicked');
});
