import menu from "./menu.json"
import cardTemplate from "./template.hbs"
import "./styles.css";
import "./components/checkbox.js"

const markup = cardTemplate(menu)
const list = document.querySelector('.menu');
list.insertAdjacentHTML('beforeend', markup);
