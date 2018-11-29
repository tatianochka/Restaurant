let link  = document.querySelector(".photo");
let  windowBackgr = document.querySelector("#registration-window-but");
let  windowBackgrSignIn = document.querySelector("#sing-in-dialog-but");
let registrationButt = document.querySelector(".registration-but");
let signInButt = document.querySelector(".sign-in-but");
let  close = document.querySelector(".close");
let  closeSignIn = document.querySelector(".close-sign-in");
let  html = document.querySelector("html");


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
