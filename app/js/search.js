function searchFood(arr, text) {
    arr.forEach(elem => {
        if(elem.innerText.indexOf(text) < 0) {
            elem.parentNode.style.display = "none";
        } else {
            elem.parentNode.style.display = "block";
        }
    });
}
