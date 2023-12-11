import Component from './core/Component.js';
import Profile from './components/profile.js';
import Experience from './components/experience.js';
import Projects from './components/Projects.js';

export default class App extends Component {
  template() {
    return `
      <div class="global-container">
        <div data-component="profile-appender"></div>
        <div class="global-line"></div>
        <div data-component="experience-appender"></div>
        <div class="global-line"></div>
        <div data-component="projects-appender"></div>
      </div>
    `;
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
  }
}
