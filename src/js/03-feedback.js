import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[type="email"]');
const inputMessage = document.querySelector('textarea');
const formInputValues = 'feedback-form-state';
let formData = {};

function reloadPege() {
  if (!localStorage.getItem(formInputValues)) {
    return
  };
  const localStorageData = JSON.parse(localStorage.getItem(formInputValues));
  inputEmail.value = localStorageData.email || '';
  inputMessage.value = localStorageData.message || '';
}

reloadPege();

const onFormInput = function (evt) {
  formData.email = inputEmail.value;
  formData.message = inputMessage.value;
  localStorage.setItem(formInputValues, JSON.stringify(formData));
};

const onFormSubmit = function (event) {
  event.preventDefault();
  const localStorageData = JSON.parse(localStorage.getItem(formInputValues));
  console.log(localStorageData);
  localStorage.removeItem(formInputValues);
  inputEmail.value = '';
  inputMessage.value = '';
};

form.addEventListener('input', throttle(onFormInput, 500));

form.addEventListener('submit', onFormSubmit);