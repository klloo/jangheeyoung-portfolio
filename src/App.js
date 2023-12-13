import Component from './core/Component.js';
import Profile from './components/Profile.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import MoonIcon from './assets/images/moon-icon.svg';
import SunIcon from './assets/images/sun-icon.svg';
import Footer from './components/Footer.js';

export default class App extends Component {
  template() {
    return `
      <div class="global-container">
        <button class="theme-button">${
          this.state.isDarkMode
            ? `<img src=${SunIcon} alt='sun-icon'/>`
            : `<img src=${MoonIcon} alt='moon-icon'/>`
        }</button>
        <div class="global-list">
          <div data-component="profile-appender"></div>
          <div class="global-line"></div>
          <div data-component="experience-appender"></div>
          <div class="global-line"></div>
          <div data-component="projects-appender"></div>
        </div>
      </div>
      <div data-component="footer-appender"></div>
    `;
  }
  setup() {
    this.state = { isDarkMode: window.__theme === window.__DARK };
  }
  setEvent() {
    this.addEvent('click', '.theme-button', () => {
      const newTheme = this.state.isDarkMode ? window.__LIGHT : window.__DARK;
      window.__setTheme(newTheme);
      this.setState({ isDarkMode: newTheme === window.__DARK });
    });
  }
  mounted() {
    const $profileAppender = this.$target.querySelector(
      '[data-component="profile-appender"]'
    );
    new Profile($profileAppender);
    const $experienceAppender = this.$target.querySelector(
      '[data-component="experience-appender"]'
    );
    new Experience($experienceAppender);
    const $projectsAppender = this.$target.querySelector(
      '[data-component="projects-appender"]'
    );
    new Projects($projectsAppender);
    const $footerAppender = this.$target.querySelector(
      '[data-component="footer-appender"]'
    );
    new Footer($footerAppender);
  }
}
