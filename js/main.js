$(document).ready(function() {
    // Arrivals Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText:['<i class="fas fa-chevron-left fa-3x"></i>', '<i class="fas fa-chevron-right fa-3x"></i>'],
        touchDrag: true,
        smartSpeed: 800,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });

    // Products Slider
$('.products-container').slick({
    dots: true,
    infinite: false,
    speed: 500,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
          opacity: 0;
          padding: 0;
          transition: all .4s linear;
        `;
      }
    });
});