function showMessage() {
    let input = document.getElementById('messageInput');
    let messageBox = document.getElementById('messageBox');
    let text = input.value;

    if (text !== '') {
        messageBox.textContent = text;
        messageBox.classList.remove('error');
    } else {
        messageBox.textContent = 'გთხოვთ შეიყვანოთ ტექსტი';
        messageBox.classList.add('error');
    }
}

function clearAll() {
    document.getElementById('messageInput').value = '';
    let messageBox = document.getElementById('messageBox');
    messageBox.textContent = '';
    messageBox.classList.remove('error');
}
