const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxReference = document.getElementById('theme-switch-toggle');
const bodyRef = document.querySelector('body');


if (localStorage.getItem('theme')) {
  const checked = JSON.parse(localStorage.getItem('theme'));
  checkboxReference.checked = checked;
  checked ? bodyRef.className = 'dark-theme' : bodyRef.className = 'light-theme'
}

const checkboxState = event => {
    localStorage.setItem('theme', JSON.stringify(event.target.checked));
    event.target.checked ? bodyRef.className = 'dark-theme' : bodyRef.className = 'light-theme'
}

checkboxReference.addEventListener('change', checkboxState);