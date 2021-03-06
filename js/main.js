// Arrivals Carousel
$(document).ready(function() {
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
                items:3
            },
            1000:{
                items:2
            }
        }
    });
});

