// Toggle mobile menu visibility
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); 
    navbar.classList.toggle('active');
};

// Auto close mobile navbar on page scroll
window.onscroll = () => {
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};