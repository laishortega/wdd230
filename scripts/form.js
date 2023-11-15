const password1 = document.querySelector("#password");
const password2 = document.querySelector("#confirm-password");
const message = document.querySelector("#error-message");

password2.addEventListener("focusout", confirmPassword);

function confirmPassword() {
    if (password1.value !== password2.value) {
        message.textContent = "❗Key Phrases DO NOT MATCH!";
        message.style.visibility = "show";
        password2.style.backgroundColor = "#fff0f3";
        password2.value = "";
        password2.focus();
    } else {
        message.style.display = "none";
        password2.style.backgroundColor = "#fff";
        password2.style.color = "#000";
    }
}

const ratingValue = document.getElementById("rating");
const pageRating = document.getElementById("page-rating");

pageRating.addEventListener("change", changeValue);
pageRating.addEventListener("input", changeValue);

function changeValue() {
    ratingValue.innerHTML = pageRating.value;
}