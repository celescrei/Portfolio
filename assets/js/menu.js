// menu.js
const botonMenu = document.querySelector('.abrir-menu');
const nav = document.querySelector('header nav');

botonMenu.addEventListener('click', () => {
    nav.classList.toggle('mostrar-menu');
});
