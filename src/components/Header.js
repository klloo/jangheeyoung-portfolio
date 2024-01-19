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
            <div>Projects</div>
            <div>Skills</div>
            <div>About</div>
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
  }
}
