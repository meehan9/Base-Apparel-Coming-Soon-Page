const form = document.getElementById("form");
const email = document.getElementById("email");
const errorIcon = document.getElementById("error-icon");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailVal = email.value;

    if (!validateEmail(emailVal)) {
        email.classList.add("error");
        errorIcon.classList.add("error");
        errorMsg.classList.add("error");
    } else {
        email.classList.remove("error");
        errorIcon.classList.remove("error");
        errorMsg.classList.remove("error");
    }
});

// email validation function
function validateEmail(email) {
    let re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}

// remove error message if clicked outside input field
function removeMsg() {
    setTimeout(() => {
        email.classList.remove("error");
        errorIcon.classList.remove("error");
        errorMsg.classList.remove("error");
    }, 100);
}

document.addEventListener("click", (e) => {
    let isClickInsideForm = form.contains(e.target);
    if (!isClickInsideForm) {
        removeMsg();
    }
});
