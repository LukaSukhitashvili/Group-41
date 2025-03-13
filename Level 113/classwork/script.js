let makeBiggerDiv = document.getElementsByClassName("makeDivBigger")[0];
let makeSmallerDiv = document.getElementsByClassName("makeDivSmaller")[0];
let changingDiv = document.getElementsByClassName("changingDiv")[0];

function makeBigger() {
    changingDiv.classList.add("makeBigger");
    changingDiv.classList.remove("makeSmaller");
}

function makeSmaller() {
    changingDiv.classList.add("makeSmaller");
    changingDiv.classList.remove("makeBigger");
}