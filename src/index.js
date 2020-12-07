import menu from "./menu.json"
import cardTemplate from "./template.hbs"
import "./styles.css";
// import { v4 as uuidv4 } from 'uuid';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxReference = document.getElementById('theme-switch-toggle');
const bodyRef = document.querySelector('body');

const onDarkTheme = () => {
  bodyRef.classList.remove('light-theme');
  bodyRef.classList.toggle('dark-theme');
}

const onLightTheme = () => {
  bodyRef.classList.remove('dark-theme');
  bodyRef.classList.toggle('light-theme');
}

// const onDarkTheme = () => {
//   bodyRef.classList.contains('light-theme') &&
//   bodyRef.classList.toggle('dark-theme');
// };

// const onLightTheme = () => {
//   bodyRef.classList.contains('dark-theme') && 
//   bodyRef.classList.toggle('light-theme');
// };


if (localStorage.getItem('theme')) {
  const checked = JSON.parse(localStorage.getItem('theme'));
  checkboxReference.checked = checked;
  checked ? onDarkTheme() : onLightTheme();
}

const checkboxState = event => {
    localStorage.setItem('theme', JSON.stringify(event.target.checked));
    event.target.checked ? onDarkTheme() : onLightTheme()
}
checkboxReference.addEventListener('change', checkboxState);



const markup = cardTemplate(menu)

const list = document.querySelector('.menu');
list.insertAdjacentHTML('beforeend', markup);
