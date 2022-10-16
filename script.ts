const form = document.getElementById('form') as HTMLFormElement
const password1El = document.getElementById('password1') as HTMLInputElement
const password2El = document.getElementById('password2') as HTMLInputElement
const messageContainer = document.querySelector('.message-container') as HTMLDivElement
const message = document.getElementById('message') as HTMLHeadingElement

let isValid = false;
let passwordsMatch = false

interface FormElements extends HTMLFormElement {
  fullname: HTMLInputElement,
  phone: HTMLInputElement,
  email: HTMLInputElement,
  website: HTMLInputElement,
  password: HTMLInputElement
}

const messageStyle = (color: 'red' | 'green') => {
  message.style.color = color
  messageContainer.style.borderColor = color
}

const passwordsStyling = (color: 'green' | 'red') => {
  password1El.style.borderColor = color
  password2El.style.borderColor = color
}

const validateForm = () => {
  //using constraint API
  isValid = form.checkValidity()

  //changing the styling based on the validation
  if (!isValid) {
    message.textContent = 'Please fill out all fields.'
    messageStyle('red')
    return;
  }
  //check if passwords match 
  if (password1El.value === password2El.value) {
    passwordsMatch = true
    passwordsStyling('green')
  } else {
    passwordsMatch = false
    passwordsStyling('red')
    message.textContent = 'Make sure passwords match'
    messageStyle('red')
    return;
  }
  //if form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = 'Successfully Registered!.'
    messageStyle('green')
  }
}
const storeFormData = () => {
  const user = {
    name: <FormElements>form.fullname.value,
    phone: <FormElements>form.phone.value,
    email: <FormElements>form.email.value,
    password: <FormElements>form.password.value,
    website: <FormElements>form.website.value
  }
  console.log(user)
}
const handleFormSubmit = (e: SubmitEvent) => {
  e.preventDefault()
  validateForm()
  if (isValid && passwordsMatch) {
    storeFormData()
  }
}

//Event Listener

form.addEventListener('submit', handleFormSubmit)