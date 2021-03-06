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
        breakpoint: 1200,
        settings: {
          margin:20, 
          slidesToShow: 2,
          slidesToScroll: 2,
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
});
