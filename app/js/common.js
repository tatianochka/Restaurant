const link  = document.querySelector(".photo");
const windowBackgr = document.querySelector("#registration-window-but");
const  windowBackgrSignIn = document.querySelector("#sign-in-dialog-but");
const registrationButt = document.querySelector(".registration-but");
const signInButt = document.querySelector(".sign-in-but");
const close = document.querySelector(".close");
const closeSignIn = document.querySelector(".close-sign-in");
const html = document.querySelector("html");


link.onclick = function() {
    document.getElementById("about").checked = true;
};

windowBackgr.onclick = function() {
    html.classList.add("non-active-scroll");

    close.onclick = function() {
        html.classList.remove("non-active-scroll");
    };

    registrationButt.onclick = function() {
        html.classList.remove("non-active-scroll");
    }
};

windowBackgrSignIn.onclick = function() {
    html.classList.add("non-active-scroll");

    closeSignIn.onclick = function() {
        html.classList.remove("non-active-scroll");
    };

    signInButt.onclick = function() {
        html.classList.remove("non-active-scroll");
    }
};
