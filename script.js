const navbarboton = document.querySelector('#navbarboton');
const menu = document.querySelector('#navbaritems');
const bars = document.querySelector('.fa-bars')
const x = document.querySelector('.fa-xmark')
const navbarcontainer = document.querySelector('.navbar-container')
const links = document.querySelectorAll('.navbaritem')
navbarboton.addEventListener('click', () => {
    menu.classList.toggle('menu-showed')
    navbarcontainer.classList.toggle('showed')
    bars.classList.toggle('hidden')
    x.classList.toggle('hidden')
    
}) 
links.forEach(link => {
    link.addEventListener('click', () =>{
        menu.classList.toggle('menu-showed')
        navbarcontainer.classList.toggle('showed')
        x.classList.toggle('hidden')
        bars.classList.toggle('hidden')
    })
});









//puedo usar toggle porque hago un cambio de posicion, si uso una propiedad como display, es mejor desactivar la clase disabled y que asi vuelva a tener display block

