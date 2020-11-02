/* SELECTORS */
const header = document.getElementsByTagName('header')[0];
const hamburger = document.getElementById('hamburger')
const cross = document.querySelector('.cross');
const menu = document.querySelector('.menu-wrap');
const sections = document.querySelectorAll('.section');

/* HAMBURGER MENU */
let menuOpen = false;

hamburger.addEventListener('click', function () {
    if(menuOpen) {
        hamburger.classList.remove('cross');
        hamburger.classList.add('hamburger');
        menu.style.left = menu.style.width;

        menuOpen = false;
    }
    else {
        hamburger.classList.remove('hamburger');
        hamburger.classList.add('cross');
        menu.style.left = '0';

        menuOpen = true;
    }
});

/* HEADER DISPLAY */
let yPosition;

window.addEventListener('scroll', function () {
    yPosition = window.scrollY;

    if(yPosition >= window.innerHeight - header.offsetHeight) {
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
    }
})