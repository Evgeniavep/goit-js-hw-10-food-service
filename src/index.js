import './sass/main.scss';

import tmpl from './templates/tmpl.hbs';
import menu from '/menu.json';


const listElement = document.querySelector('.js-menu');
const themeToggle = document.getElementById('theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


listElement.insertAdjacentHTML('beforeend', tmpl(menu));

themeToggle.addEventListener('click', onToggleClick);

localStorage.setItem('theme', Theme.LIGHT);

function onToggleClick(evt) {
  const checked = evt.currentTarget.checked;
  if (checked) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK); 
  }
  else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const reloadTheme = localStorage.getItem('theme'); 

if (reloadTheme === Theme.Dark) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    themeToggle.checked = true;
  }
return;
 