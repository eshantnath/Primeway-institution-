// =================================================
// PRIMEWAY INSTITUTE JAVASCRIPT
// =================================================

// =================================================
// CURRENT YEAR
// =================================================

document.addEventListener("DOMContentLoaded", function(){

const year = document.getElementById("year");

if(year){

    year.textContent =
        new Date().getFullYear();

}

});

// =================================================
// SPORTS BUTTON
// =================================================

const sportsButtons =
document.querySelectorAll(".sports-btn");

sportsButtons.forEach(function(button){

button.addEventListener("click", function(){

    const card =
        button.closest(".sport");

    const title =
        card.querySelector("h2").textContent;

    alert(
        title +
        "\n\nSports registration and details " +
        "will be available soon."
    );

});

});

// =================================================
// NAVIGATION ACTIVE EFFECT
// =================================================

const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach(function(link){

link.addEventListener("click", function(){

    navLinks.forEach(function(item){

        item.classList.remove("active");

    });

    this.classList.add("active");

});

});

// =================================================
// PAGE LOAD EFFECT
// =================================================

window.addEventListener("load", function(){

document.body.classList.add("page-loaded");

});


/* =================================
   SMOOTH BACKGROUND SLIDESHOW
================================= */

const slides = document.querySelectorAll(".bg-slide");

let currentSlide = 0;


function changeBackground() {

    /* Current photo hide */

    slides[currentSlide].classList.remove("active");


    /* Next photo */

    currentSlide++;

    
    /* Last photo ke baad first photo */

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }


    /* Next photo show */

    slides[currentSlide].classList.add("active");

}


/* Change photo after 6 seconds */

setInterval(changeBackground, 6000);




