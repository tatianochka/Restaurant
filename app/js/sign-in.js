const signInForm = document.getElementById("sign-in-form");
const userContainer = document.querySelector(".user-container");
const userName = document.querySelector(".user-name");
const singInError = document.querySelector(".sign-in-error");
const signInDialog = document.getElementById("sign-in-dialog");

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(signInForm.email.value, signInForm.pwd.value);
    let checkSignIn = registrationArr.filter(elem => elem.email === signInForm.email.value && elem.pwd === signInForm.pwd.value);
    console.log(checkSignIn);
    if (checkSignIn.length === 1) {
        singInError.classList.remove("active");
        userContainer.classList.remove("non-active");
        userContainer.classList.add("active");
        userName.innerHTML = `Привет, ${checkSignIn[0].name}`;
        windowBackgrSignIn.style.display = "none";
        signInDialog.style.display = "none";
    } else {
        singInError.classList.add("active");
    }
});