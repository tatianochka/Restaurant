const registrationForm = document.getElementById("registration-form");
const answerSuccess = document.querySelector(".answer-success");

let registrationArr = [];
for (let i = 0; i <= localStorage.length - 1; i++) {
    const newArray = JSON.parse(localStorage.getItem(`user-${i}`));
    registrationArr.push(newArray);
}

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let checkArr = registrationArr.filter(elem => {
        return elem.email === registrationForm.email.value;
    });
    console.log(checkArr);

    if (checkArr.length >= 1) {
        document.getElementById("error").classList.remove("non-active");
        document.getElementById("error").classList.add("error-form");
        answerSuccess.classList.add("non-active");
        answerSuccess.classList.remove("active");
    } else {
        document.getElementById("error").classList.add("non-active");
        document.getElementById("error").classList.remove("error-form");
        registrationArr.push({
            name: registrationForm.name.value,
            lastName: registrationForm.lastName.value,
            email: registrationForm.email.value,
            pwd: registrationForm.pwd.value
        });
        answerSuccess.classList.remove("non-active");
        answerSuccess.classList.add("active");
    }

    localStorage.setItem(`user-${registrationArr.length - 1}`, JSON.stringify(registrationArr[registrationArr.length - 1]));
});

const signInForm = document.getElementById("sign-in-form");

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    registrationArr.filter(elem => {
        if(elem.email === signInForm.email.value && elem.pwd === signInForm.pwd.value){

        } else {

        }
    });
};