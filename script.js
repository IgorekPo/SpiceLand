const burmerMenu = document.querySelector ('.header__burger');
const menuNav = document.querySelector ('.header__nav-body');
const menuCalls = document.querySelector ('.header__calls');

burmerMenu.addEventListener('click', function(){
   burmerMenu.classList.toggle('active');
   menuNav.classList.toggle('open');
   menuCalls.classList.toggle('open');
})