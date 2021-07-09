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

localStorage.setItem('bodyTheme', Theme.LIGHT);

function onToggleClick(evt) {
  const checked = evt.currentTarget.checked;
  if (checked) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('bodyTheme', Theme.DARK); 
  }
  else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('bodyTheme', Theme.LIGHT);
  }
}

  // localStorage.getItem('bodyTheme')
  //   if ('bodyTheme' === Theme.DARK) {
  //   document.body.classList.add(Theme.DARK);
  //   document.body.classList.remove(Theme.LIGHT);
  //   localStorage.setItem('bodyTheme', Theme.DARK);
  //   themeToggle.checked = true;
  //   };
  //   if ('bodyTheme' === Theme.LIGHT) {
  //   document.body.classList.add(Theme.LIGHT);
  //   document.body.classList.remove(Theme.DARK);
  //   };


  checkThemeStat();
function checkThemeStat() {
  const currentThemeMod = localStorage.getItem('bodyTheme');
  if (currentThemeMod === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('bodyTheme', Theme.DARK);
    themeToggle.checked = true;
  }
  if (currentThemeMod === Theme.LIGHT) {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('bodyTheme', Theme.LIGHT);
    themeToggle.checked = false;
  }
}