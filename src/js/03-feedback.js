import throttle from 'lodash.throttle';
const getEl = x => document.querySelector(x);

const form = getEl('form');
const email = getEl('[name="email"]');
const message = getEl('[name="message"]');
// const message = getEl('textarea');
const storrage = { email: '', message: '' };

form.addEventListener('input', throttle(makeStorage, 500));
// form.addEventListener('input', makeStorage);
populateInput();
form.addEventListener('submit', resetStorage);

function makeStorage(evt) {
  storrage[evt.target.name] = evt.target.value;
  const stringify = JSON.stringify(storrage);
  localStorage.setItem('feedback-form-state', stringify);
}

function populateInput() {
  const savedMessage = localStorage.getItem('feedback-form-state');

  if (savedMessage) {
    const parsed = JSON.parse(savedMessage);

    email.value = parsed.email;
    storrage.email = parsed.email;

    message.value = parsed.message;
    storrage.message = parsed.message;
  }
}

function resetStorage(evt) {
  evt.preventDefault();

  localStorage.removeItem('feedback-form-state');
  console.log(storrage);

  evt.currentTarget.reset();
}
