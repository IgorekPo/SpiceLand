const burgerMenu = document.querySelector ('.burger__menu');
const headerMenu = document.querySelector ('.header__nav')

burgerMenu.addEventListener('click', function(){
    burgerMenu.classList.toggle ('active')
    headerMenu.classList.toggle ('active')
})