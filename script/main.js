const hamburgerMenu = document.querySelector('.hamburger');
const menu = document.querySelector('menu');

hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('visible');
});
