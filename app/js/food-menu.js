function foodMenuGenerator(arr) {
    let container = document.querySelector(".food-menu-container");

    arr.forEach(item => {
        let menuItem = document.createElement("div");
        let name = document.createElement("p");
        let foodImg = document.createElement("div");
        let price = document.createElement("p");

        menuItem.setAttribute("class", "food-menu-item");
        menuItem.setAttribute("data-value", item.mealId);

        foodImg.setAttribute("class", "food-menu-img");
        foodImg.style.backgroundImage = `url(${item.src})`;
        menuItem.appendChild(foodImg);

        name.appendChild(document.createTextNode(item.name));
        name.setAttribute("class", "food-name");
        menuItem.appendChild(name);

        price.appendChild(document.createTextNode(`${item.price} грн`));
        menuItem.appendChild(price);
        price.setAttribute("class", "food-price");

        container.appendChild(menuItem);
    });
}

function selectItem(target) {
    let foodItem = Array.from(document.querySelectorAll(".food-menu-item"));
    if (target != null && target.checked) {
        foodItem.forEach(elem => {
            if (target.getAttribute("data-meal-id") === "0") {
                elem.style.display = "block";
            } else if (elem.getAttribute("data-value") === target.getAttribute("data-meal-id")) {
                elem.style.display = "block";
            } else {
                elem.style.display = "none";
            }
        });
    }
}

let selects = document.querySelectorAll(".select");

selects.forEach(select => {
    select.addEventListener('change', (e) => {
        e.preventDefault();
        selectItem(e.target);
    });
});

