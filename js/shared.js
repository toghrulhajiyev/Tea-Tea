// Dropdown With Hover
$(document).ready(function() {
  $('.main-nav-container .main-nav-item').hover(function() {
    $(this).find('.dropdown-menu').toggle();
  });
});

// Hamburger Menu
const hamburgerMenu = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');

hamburgerMenu.addEventListener('click', () => {

  if(!mainNav.classList.contains('active')) {
    mainNav.classList.add('active');
    mainNav.style.cssText = `
      height: 100%;
      opacity: 1;
      padding: 30px 0;
      transition: all .4s linear;

    `;
  } else {
    mainNav.classList.remove('active');
    mainNav.style.cssText = `
      padding: 0;
      transition: all .4s linear;
    `;
  }
});

// Fixed Navbar
const logoNavbar = document.querySelector('.logo-navbar');

window.addEventListener('scroll', function stickyNavbar() {
if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
logoNavbar.style.cssText = `
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 9999;
  transition: all .5s linear;
`;
} else {
logoNavbar.style.cssText = `
  position: static;
`;
}
});

// Back To Top
const backToTop = document.querySelector('#backToTop');
backToTop.style.display = "none";

window.addEventListener('scroll', () => {
if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
  backToTop.style.display = "block";
} else {
  backToTop.style.display = "none";
}
});

backToTop.addEventListener('click', function goToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
});