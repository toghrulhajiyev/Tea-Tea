// Contact Section Validation
const form = document.querySelector('.form');
const firstName = document.querySelector('.firstname');
const phoneNumber = document.querySelector('.phone-number');
const mail = document.querySelector('#mail');
const comments = document.querySelector('#comments');
const validMailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Event Listener
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

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

// Alert Functions
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
  