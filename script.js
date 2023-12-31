let menuIcon = document.querySelector('.menu');
let closeIcon = document.querySelector('.close');
let navLinks = document.querySelector('.navlinks');

menuIcon.addEventListener('click', function(){
    menuIcon.classList.add('hide');
    closeIcon.classList.remove('hide');
    navLinks.classList.add('navMobile');
})

closeIcon.addEventListener('click', function(){
    menuIcon.classList.remove('hide');
    closeIcon.classList.add('hide');
    navLinks.classList.remove('navMobile');
})