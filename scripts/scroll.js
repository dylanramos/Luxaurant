// To set the sections id
const container = document.querySelector('.container-full');
let sections = container.getElementsByTagName('section');

for (let i = 0; i < sections.length; i++)
{
    sections[i].id = i + 1;
}

// Scroll event
let lastScrollPosition = 0;
let ticking = false;

let currentSection = 0;
let section;

window.addEventListener('scroll', function () {

})

