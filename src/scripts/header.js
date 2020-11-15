/* SELECTORS */
const header = document.getElementsByTagName('header')[0];

/* HEADER CLASS */
let yPosition;

window.addEventListener('scroll', function () {
    yPosition = window.scrollY;

    if(yPosition >= window.innerHeight - header.offsetHeight) {
        header.classList.add("active", "bg-black");
    }
    else {
        header.classList.remove("active", "bg-black");
    }
});