/*var slideIndex = 0;
showSlide();
setInterval(showSlide, 2000);

function showSlide() {
    var slider = document.getElementsByClassName("slide");
    var i;
    for (i = 0; i < slider.lenght; i++) {
        slider[i].style.display = "none";
    }
    slider[slideIndex].style.display = "block";
    slideIndex++;

    if (slideIndex >= slider.lenght) {
        slideIndex = 0;
    }

}*/


var slideIndex = 0;
showSlide();
setInterval(showSlide, 2000);

function showSlide() {
    var slider = document.getElementsByClassName("slide");
    var i;
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    slider[slideIndex].style.display = "block";
    slideIndex++;

    if (slideIndex >= slider.length) {
        slideIndex = 0;
    }

}
