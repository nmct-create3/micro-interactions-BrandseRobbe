let knop;
let inputvak;
let email;
let form_field;
let form_field2;
let email_message;
let password;
let password_message;
const laadDOM = function() {
  knop = document.querySelector('#togglePasswordCheckbox');
  inputvak = document.querySelector('#password');

  form_field = document.querySelector('.c-form-field');
  form_field2 = document.querySelector('.c-form-field2');

  email = document.querySelector('#username');
  email_message = document.querySelector('.js-message__email');

  password = document.querySelector('#password');
  password_message = document.querySelector('.js-message__pass');
};
const passtogle = function() {
  knop.addEventListener('input', function() {
    console.log(this.checked);
    if (this.checked) {
      inputvak.type = 'text';
    } else {
      inputvak.type = 'password';
    }
  });
};

const validate = function() {
  input_validates();
  return false;
};

const isValidEmailAddress = function() {
  if (email.value.length > 0) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      // console.log(email.value);
      form_field.classList.add('has-error');
      email_message.innerHTML = 'Give a valid email';
    } else {
      form_field.classList.remove('has-error');
      email_message.innerHTML = '';
    }
  } else {
    // console.log('mag niet 0 zijn.');
    form_field.classList.add('has-error');
    email_message.innerHTML = 'Field required!';
  }
};

const isValidPassword = function() {
  if (password.value.length > 0) {
    form_field2.classList.remove('has-error');
    password_message.innerHTML = '';
    if (password.value.length < 8) {
      form_field2.classList.add('has-error');
      password_message.innerHTML = 'Needs to be longer than 8 characters';
    }
  } else {
    form_field2.classList.add('has-error');
    password_message.innerHTML = 'Field required!';
  }
};

const input_validates = function() {
  isValidEmailAddress();
  email.addEventListener('input', isValidEmailAddress);
  isValidPassword();
  password.addEventListener('input', isValidPassword);
};

const init = function() {
  laadDOM();
  passtogle();
};

document.addEventListener('DOMContentLoaded', init);
