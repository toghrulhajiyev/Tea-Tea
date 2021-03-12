   // Patterns
   const validMailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   const validPasswordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{10,}$/

    // Login Form Validation
    const logInForm = document.querySelector('.login-form');
    const logInMail = document.querySelector('#login-mail');
    const password = document.querySelector('.password');
    
    // Login form event listener
    logInForm.addEventListener('submit', function(e) {
    e.preventDefault();

    checkLogInForm();
    });

    function checkLogInForm() {
        // Mail Validation
        if(logInMail.value == "") {
            setError(logInMail, "Please write your email");
        } else if(!validMailPattern.test(logInMail.value)) {
            setError(logInMail, "Please write a valid mail");
        } else {
            success(logInMail);
        }

        // Password Validation
        if(password.value == "") {
            setError(password, "Please write your password");
        } else if(!validPasswordPattern.test(password.value)) {
            setError(password, "Please use at least 10 characters (1 uppercase, 1 lowercase, 1 number");
        } else {
            success(password);
        }
    }

    // Signup Form Validation
    const signUpForm = document.querySelector('#signup-form');
    const firstName = document.querySelector('#firstname');
    const lastName = document.querySelector('#lastname');
    const signUpMail = document.querySelector('#signup-mail');
    const signUpPass = document.querySelector('#password');

    // Signup form event listener
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        checkSignUpForm();
    });

    function checkSignUpForm() {
        // Firstname Validation
        if(firstName.value == "") {
            setError(firstName, "Please write your first name");
        } else {
            success(firstName);
        }

        // Lastname Validation
        if(lastName.value == "") {
            setError(lastName, "Please write your first name");
        } else {
            success(lastName);
        }

        // Mail Validation
        if(signUpMail.value == "") {
            setError(signUpMail, "Please write your email");
        } else if(!validMailPattern.test(signUpMail.value)) {
            setError(signUpMail, "Please write a valid mail");
        } else {
            success(signUpMail);
        }

        // Password Validation
        if(signUpPass.value == "") {
            setError(signUpPass, "Please write your password");
        } else if(!validPasswordPattern.test(signUpPass.value)) {
            setError(signUpPass, "Please use at least 10 characters (1 uppercase, 1 lowercase, 1 number");
        } else {
            success(signUpPass);
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
    