/* SELECTORS */
const hamburger = document.getElementById('hamburger')
const cross = document.querySelector('.cross');
const menu = document.querySelector('.menu-wrap');

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