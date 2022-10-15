import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const storage = { email: '', message: '' };

form.addEventListener('input', throttle(makeStorage, 500));
populateByStorage();
form.addEventListener('submit', clearStorage);

function makeStorage(evt) {
  storage[evt.target.name] = evt.target.value;
  const stringify = JSON.stringify(storage);
  localStorage.setItem('feedback-form-state', stringify);
}

function populateByStorage() {
  const savedMessage = localStorage.getItem('feedback-form-state');

  if (savedMessage) {
    const parsed = JSON.parse(savedMessage);

    email.value = parsed.email;
    storage.email = parsed.email;

    message.value = parsed.message;
    storage.message = parsed.message;
  }
}

function clearStorage(evt) {
  evt.preventDefault();

  console.log(storage);
  storage.email = '';
  storage.message = '';
  localStorage.removeItem('feedback-form-state');

  evt.currentTarget.reset();
}
