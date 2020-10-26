const hamburger = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');
const menu = document.querySelector('.menu-wrap');

hamburger.addEventListener('click', () => {
    menu.style.left = '0';
});

cross.addEventListener('click', () => {
    menu.style.left = menu.style.width;
});