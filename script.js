"use strict";
const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
let isValid = false;
let passwordsMatch = false;
const messageStyle = (color) => {
    message.style.color = color;
    messageContainer.style.borderColor = color;
};
const passwordsStyling = (color) => {
    password1El.style.borderColor = color;
    password2El.style.borderColor = color;
};
const validateForm = () => {
    //using constraint API
    isValid = form.checkValidity();
    //changing the styling based on the validation
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        messageStyle('red');
        return;
    }
    //check if passwords match 
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        passwordsStyling('green');
    }
    else {
        passwordsMatch = false;
        passwordsStyling('red');
        message.textContent = 'Make sure passwords match';
        messageStyle('red');
        return;
    }
    //if form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!.';
        messageStyle('green');
    }
};
const storeFormData = () => {
    const user = {
        name: form.fullname.value,
        phone: form.phone.value,
        email: form.email.value,
        password: form.password.value,
        website: form.website.value
    };
    console.log(user);
};
const handleFormSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (isValid && passwordsMatch) {
        storeFormData();
    }
};
//Event Listener
form.addEventListener('submit', handleFormSubmit);
