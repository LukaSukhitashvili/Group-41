let name = document.getElementById("name");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let submit = document.getElementById("submit");
let form = document.getElementById("form");
let body = document.body;


let feedbackH1 = document.createElement("h1");
feedbackH1.textContent = "Enter your information"; 
feedbackH1.style.fontSize = "24px";
feedbackH1.style.textAlign = "center";

document.body.appendChild(feedbackH1);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (name.value === "" || lastName.value === "" || email.value === "" || password.value === "" || confirmPassword.value === "") {
        alert("please enter information");
        return;
    }
    if (password.value !== confirmPassword.value) {
        body.style.backgroundColor = "red";
        feedbackH1.textContent = "WARNING INCORRECT";
        feedbackH1.style.color = "white";
    } else if (password.value === confirmPassword.value) {
        body.style.backgroundColor = "green";
        feedbackH1.textContent = "CORRECT";
        feedbackH1.style.color = "white";
    }
});

