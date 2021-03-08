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
        transition: all .4s linear;
      `;
    } else {
      mainNav.classList.remove('active');
      mainNav.style.cssText = `
        height: 0;
        opacity: 0;
        transition: all .4s linear;
      `;
    }
  });
});

// Form Validation
const form = document.querySelector('.form');
const firstName = document.querySelector('.firstname');
const phoneNumber = document.querySelector('.phone-number');
const mail = document.querySelector('#mail');
const comments = document.querySelector('#comments');
const validPasswordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$/
const validMailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Event Listener
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

// Functions
// Error
function setError(target, message) {
  // Change input border color
  target.style.borderColor = "red"
  // Add class to container
  target.nextElementSibling.classList.add('d-block');
  // Add error to message
  target.nextElementSibling.innerText = message; 
}

// Success
function success(target) {
  target.nextElementSibling.classList.remove('d-block');
  target.style.borderColor = "";
}

// Check Inputs
function checkInputs() {
  // First name
  if(firstName.value == "") {
    setError(firstName, "Please write your name");
  } else {
    success(firstName);
  }

  // Phone Number
  if(phoneNumber.value == "") {
    setError(phoneNumber, "Please write your phone number");
  } else if(!phoneNumber.value.includes('+')) {
    setError(phoneNumber, "Please write phone number with country code");
  } 
  else {
    success(phoneNumber);
  }

  // Email
  if(mail.value == "") {
    setError(mail, "Please write your mail address");
  } else if(!validMailPattern.test(mail.value)) {
    setError(mail, "Please write your mail valid");
  } else {
    success(mail);
  }

  // Comments
  if(comments.value == "") {
    setError(comments, "Please write your thoughts about our company");
  } else {
    success(comments);
  }
}