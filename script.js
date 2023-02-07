'use strict';

// element toggle function
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



// navbar variables
const navbar = document.querySelector("[data-navbar]");
const navbarToggleBtn = document.querySelector("[data-navbar-toggle-btn]");

navbarToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar); });



// whishlist button
const whishlistBtn = document.querySelectorAll("[data-whishlist-btn]");

for (let i = 0; i < whishlistBtn.length; i++) {

  whishlistBtn[i].addEventListener("click", function () { elemToggleFunc(this); });

}



// go to top variable
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (this.window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});


const loginBtn = document.getElementById("login-btn");
const loginForm = document.getElementById("login-form");
const closeBtn = document.getElementById("close-btn");

loginBtn.addEventListener("click", function() {
  loginForm.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  loginForm.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === loginForm) {
    loginForm.style.display = "none";
  }
});

function validateDOB() {
  let dob = new Date(document.getElementById("dob").value);
  let today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  let m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  if (age < 18) {
    document.getElementById("error-message").innerHTML = "You must be at least 18 years old to sign up.";
  } else {
    document.getElementById("error-message").innerHTML = "";
  }
}

function validateEmail() {
  let email = document.getElementById("email").value;
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailRegex.test(email)) {
    document.getElementById("error-message").innerHTML = "Please enter a valid email.";
  } else {
    document.getElementById("error-message").innerHTML = "";
  }
}


function validateFirstName() {
  let firstName = document.getElementById("first-name").value;

  if (firstName.length > 25) {
    document.getElementById("first-name-error").innerHTML = "First name must not exceed 25 characters.";
  } else {
    document.getElementById("first-name-error").innerHTML = "";
  }
}

function validateLastName() {
  let lastName = document.getElementById("last-name").value;

  if (lastName.length > 25) {
    document.getElementById("last-name-error").innerHTML = "Last name must not exceed 25 characters.";
  } else {
    document.getElementById("last-name-error").innerHTML = "";
  }
}


function validatePassword() {
  let password = document.getElementById("password").value;
  let passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

  if (!passwordRegex.test(password)) {
    document.getElementById("password-error").innerHTML = "Password must be at least 8 characters long and contain at least 1 upper case letter and 1 symbol (!, @, #, $, %, ^, &, *).";
  } else {
    document.getElementById("password-error").innerHTML = "";
  }
}

function validateConfirmPassword() {
  
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    document.getElementById("confirm-password-error").innerHTML = "Confirm password must match password.";
  } else {
    document.getElementById("confirm-password-error").innerHTML = "";
  }
}

function validateForm() {
  validateFirstName();
  validateLastName();
  validateDOB();
  validateEmail();
  validatePassword();
  validateConfirmPassword();

  let errorDivs = document.querySelectorAll("first-name-error,last-name-error,error-message, confirm-password-error,password-error");

  // let errorDivs = documentget.ElementsByClassName("error-message");
  let hasError = false;

  for (let i = 0; i < errorDivs.length; i++) {
    if (errorDivs[i].innerHTML !== "") {
      hasError = true;
      break;
    }
  }

  let email = document.getElementById("email").value;
  if (localStorage.getItem("email") === email) {
    document.getElementById("error-message").innerHTML = "You are already registered with this email";
    console.log("you are already stored")
    alert("You are already registered with this email" )
    hasError = true;
  }

  if (!hasError) {
    localStorage.setItem("email", email);
    showSuccessModal();
  }
}

function showSuccessModal() {
  let modal = document.getElementById("success-modal");
  alert("Success" )
  modal.style.display = "block";
}


function closeModal() {
  let modal = document.getElementById("success-modal");
  modal.style.display = "none";
}

