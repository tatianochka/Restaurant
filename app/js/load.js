const reqFood = new XMLHttpRequest();

reqFood.onreadystatechange = function () {
    if(reqFood.readyState === 4 && reqFood.status === 200) {
        const text = reqFood.responseText;
        const  menu = JSON.parse(text);

        foodMenuGenerator(menu);

        let foodIt = Array.from(document.querySelectorAll(".food-name"));

        document.getElementById("search-form")
            .searchText.oninput = function (event) {
            const text = this.value;
            searchFood(foodIt, text);
        };
    }
};
reqFood.open("get", "http://localhost:3002/json/menu.json");
reqFood.send();
