const reqSlider = new XMLHttpRequest();

function generateImg (arr) {
    let sliderContainer = document.getElementById("slider-container");
    arr.forEach(elem => {
        let img = document.createElement("img");
        img.setAttribute("alt", elem.alt);
        img.setAttribute("src", elem.src);
        img.classList.add("slide-item");
        sliderContainer.appendChild(img);
    });
}

reqSlider.onreadystatechange = function () {
    if(reqSlider.readyState === 4 && reqSlider.status === 200) {
        const text = reqSlider.responseText;
        const slideImages = JSON.parse(text);

        generateImg(slideImages);

        const changeSlideBtns = document.querySelectorAll('.slide-button');
        const slides = document.querySelectorAll('.slide-item');
        let slideCount = 0;
        const slideLength = slideImages.length - 1;
        slides[0].classList.add('active-slide');
        let sliderInterval = setInterval(function () {
            document.querySelectorAll('.active-slide').forEach(sl => sl.classList.remove('active-slide'));

            if (slideCount >= slideLength) {
                slideCount = 0;
            } else {
                slideCount = slideCount + 1;
            }

            slides[slideCount].classList.add('active-slide');
        }, 1700);

        changeSlideBtns.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                changeSlide(e.target);
            });
        });

        function changeSlide(target) {

            clearInterval(sliderInterval);

            document.querySelectorAll('.active-slide').forEach(sl => sl.classList.remove('active-slide'));

            if (target.classList.contains('slide-right')) {
                slideCount = slideCount >= slideLength ? 0 : slideCount + 1;
            }

            if (target.classList.contains('slide-left')) {
                slideCount = slideCount <= 0 ? slideLength : slideCount - 1;
            }

            slides[slideCount].classList.add('active-slide');

            setInterval(sliderInterval);
        }
    }
};
reqSlider.open("get", "http://localhost:3002/json/slideImages.json");
reqSlider.send();
