function addItem() {
    let input = document.getElementById('itemInput');
    let text = input.value;
    
    if (text !== '') {
        let li = document.createElement('li');
        li.textContent = text;
        document.getElementById('itemList').appendChild(li);
        input.value = '';
    }
}

function clearList() {
    document.getElementById('itemList').innerHTML = '';
}
