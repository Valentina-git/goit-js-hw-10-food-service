import menu from "./menu.json"
import cardTemplate from "./template.hbs"
import "./styles.css";
// import { v4 as uuidv4 } from 'uuid';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxReference = document.getElementById('theme-switch-toggle');
const body = document.querySelector('body');

const onDarkTheme = () => {
    body.classList.add('dark-theme');
    body.classList.toggle('light-theme');
}

const onLightTheme = () => {
    body.classList.add('light-theme');
    body.classList.toggle('dark-theme');
}

const checkboxState = event => {
    localStorage.setItem('theme', JSON.stringify(event.target.checked));
    event.target.checked ? onDarkTheme() : onLightTheme()
}
checkboxReference.addEventListener('change', checkboxState);

if (localStorage.getItem('theme')) {
  const checked = JSON.parse(localStorage.getItem('theme'));
  checkboxReference.checked = checked;
  checked ? onDarkTheme() : onLightTheme();
}

// ====================================================

const markup = cardTemplate(menu)

const list = document.querySelector('.js-menu');
list.insertAdjacentHTML('beforeend', markup);
