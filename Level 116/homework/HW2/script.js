let itemList = document.getElementById('itemList');

itemList.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        console.log(e.target.textContent);
    }
});
