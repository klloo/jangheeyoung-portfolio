import Component from '../core/Component.js';
import Style from '../style/tech-stack.css';

export default class Techstack extends Component {
  template() {
    const frontList = ['React', 'Vue', 'Next.js', 'Gatsby.js', 'HTML/CSS'];
    const backList = ['Express', 'Spring', 'MySQL'];
    const langList = ['JavaScript', 'TypeScript', 'Java', 'C/C++'];
    const infraList = ['AWS EC2', 'Docker', 'Github Actions'];
    const techStack = [frontList, backList, langList, infraList];

    return `
      <div>
        <div class="tech-title">기술 스택</div>
        <div class="tech-list-container">
          ${techStack
            .map(
              (techList) => `
              <div class="tech-list-wrapper">
                ${techList.map((tech) => `<div>${tech}</div>`).join('')}
              </div>
            `
            )
            .join('')}
        </div>
      </div>
    `;
  }
}
