import App from './App.js';
import Style from './style/global-style.css';

window.__DARK = 'dark';
window.__LIGHT = 'light';

const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('theme');

window.__theme =
  savedTheme || (darkQuery.matches ? window.__DARK : window.__LIGHT);

window.__setTheme = (newTheme) => {
  if (newTheme === window.__DARK) {
    document.body.setAttribute('data-theme', window.__DARK);
  } else {
    document.body.setAttribute('data-theme', window.__LIGHT);
  }
  localStorage.setItem('theme', newTheme);
  window.__theme = newTheme;
};

window.__setTheme(window.__theme);

new App(document.querySelector('#app'));
