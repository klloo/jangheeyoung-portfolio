import Component from '../core/Component.js';
import Techstack from './TechStack.js';
import Style from '../style/profile.css';

export default class Profile extends Component {
  template() {
    const linkList = [
      {
        name: 'github',
        iconSrc: '/src/images/github-icon.svg',
        href: 'https://github.com/klloo',
      },
      {
        name: 'blog',
        iconSrc: '/src/images/blog-icon.svg',
        href: 'https://klloo.github.io',
      },
      {
        name: 'velog',
        iconSrc: '/src/images/velog-icon.svg',
        href: 'https://velog.io/@klloo',
      },
    ];
    return `
        <div class="profile-container">
            <div class="profile-wrapper">
                <img class="profile-image" src="src/images/profile-img.png" alt="profile-img"/>
                <div class="profile-name">
                    장희영
                    <div class="profile-position">
                        프론트엔드 개발자
                    </div>
                </div>
            </div>
            <div class="profile-description">
                안녕하세요. <b>프론트엔드 개발자</b>를 지망하는 장희영입니다.<br/>
                저는 <b>통찰력 있는</b> 개발자가 되기 위해 <b>다양한 분야를 탐구</b>하려고 노력합니다.<br/>
                <b>폭넓은 시야</b>를 가지고 다양한 기술에 대한 이해를 높임으로써 <b>보다 나은 서비스</b>를 만들어내는 개발자가 되고 싶습니다.
            </div>
            <div class="profile-icon-wrapper">
              ${linkList
                .map(
                  (link) => `
                  <a target="_blank" href="${link.href}">
                    <img class="profile-icon" src="${link.iconSrc}" alt="${link.name}">
                  </a>
              `
                )
                .join('')}
            </div>
            <div data-component="techstack-appender"></div>
        </div>
    `;
  }
  mounted() {
    const $techstackAppender = this.$target.querySelector(
      '[data-component="techstack-appender"]'
    );
    new Techstack($techstackAppender);
  }
}
