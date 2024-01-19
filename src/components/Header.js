import Component from '../core/Component.js';
import MoonIcon from '../assets/images/moon-icon.svg';
import SunIcon from '../assets/images/sun-icon.svg';
import Style from '../style/header.css';

export default class Header extends Component {
  template() {
    return `
        <div class="header-wrapper">
            <div class="header-theme-button">${
              this.state.isDarkMode
                ? `<img src=${SunIcon} alt='sun-icon'/>`
                : `<img src=${MoonIcon} alt='moon-icon'/>`
            }</div>
            <div class="header-menu">Projects</div>
            <div class="header-menu">Skills</div>
            <div class="header-menu">About</div>
        </div>
    `;
  }
  setup() {
    this.state = { isDarkMode: window.__theme === window.__DARK };
  }
  setEvent() {
    this.addEvent('click', '.header-theme-button', () => {
      const newTheme = this.state.isDarkMode ? window.__LIGHT : window.__DARK;
      window.__setTheme(newTheme);
      this.setState({ isDarkMode: newTheme === window.__DARK });
    });

    this.addEvent('click', '.header-wrapper', (event) => {
      const idx = Array.from(event.target.parentElement.children).indexOf(
        event.target
      );
      console.log(idx);
      const menus = ['', 'projects', 'skills', 'about'];
      const sectionElement = document.getElementById(menus[idx]);
      const sectionTop = sectionElement?.getBoundingClientRect().top;

      window.scrollTo({
        top: window.scrollY + sectionTop - 80,
        behavior: 'smooth',
      });
    });
  }
}
