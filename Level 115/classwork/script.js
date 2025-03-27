let imgs = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png",
    "https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png?f=webp",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"


]

let num = 0
function next() {
    let slider = document.querySelector("#slider")
    num++
    if (num > imgs.length) {
        num = 0;
    }
    slider.src = imgs[num]
}

function priv() {
    let slider = document.querySelector("#slider")
    num--
    if (num < 0) {
        num = imgs.length - 1;
    }
    slider.src = imgs[num]
}