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
        opacity: 0;
        padding: 0;
        transition: all .4s linear;
      `;
    }
  });

  // Back To Top
  const backToTop = document.querySelector('#backToTop');
  backToTop.style.display = "none";

  window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
  });

  backToTop.addEventListener('click', function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

//   Questions Accordion
const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(function(accordionBtn) {
    accordionBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if(!accordionBtn.nextElementSibling.classList.contains('active')) {
            accordionBtn.nextElementSibling.classList.add('active');
            accordionBtn.nextElementSibling.style.cssText = `
                visibility: visible;
                opacity: 1;
                height: 100%;
                padding: 2em 0;
            `;
            accordionBtn.lastElementChild.style.transform = `rotate(135deg)`;
        } else {
            accordionBtn.nextElementSibling.classList.remove('active');
            accordionBtn.nextElementSibling.style.cssText = `
            visibility: hidden;
            opacity: 0;
            height: 0;
            padding: 0;
        `;
        accordionBtn.lastElementChild.style.transform = `rotate(0)`;
        }
    })
});