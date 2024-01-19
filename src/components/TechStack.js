import Component from '../core/Component.js';
import Style from '../style/tech-stack.css';
import ReactLogo from '../assets/images/react-logo.svg';
import VueLogo from '../assets/images/vuejs-logo.svg';
import GatsbyLogo from '../assets/images/gatsby-logo.svg';
import SpringLogo from '../assets/images/spring-logo.svg';
import ExpressLogo from '../assets/images/express-logo.svg';
import JavaLogo from '../assets/images/java-logo.svg';
import CLogo from '../assets/images/c-logo.svg';
import JsLogo from '../assets/images/js-logo.svg';
import TsLogo from '../assets/images/ts-logo.svg';
import GithubActionsLogo from '../assets/images/github-actions-logo.svg';
import DockerLogo from '../assets/images/docker-logo.svg';
import Ec2Logo from '../assets/images/ec2-logo.svg';
import NginxLogo from '../assets/images/nginx-logo.svg';
import MysqlLogo from '../assets/images/mysql-logo.svg';

export default class Techstack extends Component {
  template() {
    const frontList = [
      {
        name: 'React',
        star: '★★★',
        desc: '개인 프로젝트 진행 경험이 있습니다.',
        icon: ReactLogo,
      },
      {
        name: 'Vue.js',
        star: '★★★',
        desc: '실무 경험이 있습니다.',
        icon: VueLogo,
      },
      {
        name: 'Gatsby.js',
        star: '★☆☆',
        desc: '개인 블로그 구축 경험이 있습니다.',
        icon: GatsbyLogo,
      },
    ];
    const backList = [
      {
        name: 'Spring MVC',
        star: '★★☆',
        desc: '실무 경험이 있습니다.',
        icon: SpringLogo,
      },
      {
        name: 'Express',
        star: '★☆☆',
        desc: '개인 프로젝트 진행 경험이 있습니다.',
        icon: ExpressLogo,
      },
    ];
    const langList = [
      {
        name: 'JavaScript',
        star: '★★★',
        desc: '실무 경험이 있습니다.',
        icon: JsLogo,
      },
      {
        name: 'TypeScript',
        star: '★★☆',
        desc: '개인 프로젝트 진행 경험이 있습니다.',
        icon: TsLogo,
      },
      {
        name: 'Java',
        star: '★★☆',
        desc: '실무 경험이 있습니다.',
        icon: JavaLogo,
      },
      {
        name: 'C/C++',
        star: '★★☆',
        desc: ' 알고리즘 학습 시 사용하고 있습니다.',
        icon: CLogo,
      },
    ];
    const devopsList = [
      {
        name: 'AWS EC2',
        star: '★☆☆',
        desc: '개인 프로젝트 배포 경험이 있습니다.',
        icon: Ec2Logo,
      },
      {
        name: 'Github Actions',
        star: '★☆☆',
        desc: '개인 프로젝트 배포 경험이 있습니다.',
        icon: GithubActionsLogo,
      },
      {
        name: 'Docker',
        star: '★☆☆',
        desc: '개인 프로젝트 배포 경험이 있습니다.',
        icon: DockerLogo,
      },
      {
        name: 'Nginx',
        star: '★☆☆',
        desc: '개인 프로젝트 배포 경험이 있습니다.',
        icon: NginxLogo,
      },
      {
        name: 'MySQL',
        star: '★☆☆',
        desc: '실무 경험이 있습니다.',
        icon: MysqlLogo,
      },
    ];
    const techStack = [
      { key: 'Frontend', list: frontList },
      { key: 'Backend', list: backList },
      { key: 'Language', list: langList },
      { key: 'DevOps', list: devopsList },
    ];

    return `
      <div class="tech-conatiner">
        <div class="tech-title">🛠️ Skills</div>
        <div class="tech-warning">★★★ 별점은 사용 빈도 및 숙련도에 따른 상대적인 수치입니다.</div>
        <div class="tech-list-container">
          <div class="global-menu-list">
            ${techStack
              .map(
                (techList, idx) => `
                  <div class="global-menu ${
                    idx === this.state.curTab ? 'global-menu-selected' : ''
                  }">${techList.key}</div>
              `
              )
              .join('')}
          </div>
          ${techStack
            .map(
              (techList, idx) => `
              <div class="tech-list-wrapper ${
                idx !== this.state.curTab ? 'hidden ' : ''
              }">
                <div class="tech-info-wrapper">
                ${techList.list
                  .map(
                    (tech) =>
                      `<div class="tech-info">
                        <img class="tech-icon" src=${tech.icon}/>
                        <div class="tech-star">
                          ${tech.star}
                        </div>
                        <div class="tech-tag">
                          ${tech.name}
                        </div>
                        <div class="tech-desc">
                          ${tech.desc}
                        </div>
                      </div>`
                  )
                  .join('')}
                </div>
              </div>
            `
            )
            .join('')}
        </div>
      </div>
    `;
  }
  setup() {
    this.state = { curTab: 0 };
  }
  setEvent() {
    this.addEvent('click', '.global-menu', (event) => {
      const idx = Array.from(event.target.parentElement.children).indexOf(
        event.target
      );
      this.setState({ ...this.state, curTab: idx });
    });
  }
}
