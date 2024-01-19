import Component from './core/Component.js';
import Profile from './components/Profile.js';
import TechStack from './components/TechStack.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';

export default class App extends Component {
  template() {
    return `
    <div data-component="header-appender"></div>
      <div class="global-container">
        <div class="global-list">
          <div data-component="profile-appender"></div>
          <div class="global-line"></div>
          <div data-component="techstack-appender"></div>
          <div class="global-line"></div>
          <div data-component="projects-appender"></div>
        </div>
      </div>
      <div data-component="footer-appender"></div>
    `;
  }
  mounted() {
    const $headerAppender = this.target.querySelector(
      '[data-component="header-appender"]'
    );
    new Header($headerAppender);
    const $profileAppender = this.target.querySelector(
      '[data-component="profile-appender"]'
    );
    new Profile($profileAppender);
    const $techstackAppender = this.target.querySelector(
      '[data-component="techstack-appender"]'
    );
    new TechStack($techstackAppender);
    const $projectsAppender = this.target.querySelector(
      '[data-component="projects-appender"]'
    );
    new Projects($projectsAppender);
    const $footerAppender = this.target.querySelector(
      '[data-component="footer-appender"]'
    );
    new Footer($footerAppender);
  }
}
