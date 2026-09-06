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

