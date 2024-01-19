import Component from '../core/Component.js';
import Techstack from './TechStack.js';
import GithubIcon from '../assets/images/github-icon.svg';
import BlogIcon from '../assets/images/blog-icon.svg';
import VelogIcon from '../assets/images/velog-icon.svg';
import ProfileImage from '../assets/images/profile-img.png';
import Style from '../style/profile.css';

export default class Profile extends Component {
  template() {
    const linkList = [
      {
        name: 'github',
        iconSrc: GithubIcon,
        href: 'https://github.com/klloo',
      },
      {
        name: 'blog',
        iconSrc: BlogIcon,
        href: 'https://klloo.github.io',
      },
      {
        name: 'velog',
        iconSrc: VelogIcon,
        href: 'https://velog.io/@klloo',
      },
    ];
    return `
        <div class="profile-container">
            <div class="profile-wrapper">
                <img class="profile-image" src="${ProfileImage}" alt="profile-img"/>
                <div class="profile-name">
                    장희영
                    <div class="profile-position">
                        프론트엔드 개발자
                    </div>
                    <div class="profile-icon-wrapper">
                      ${linkList
                        .map(
                          (link) => `
                          <div>
                            <a target="_blank" href="${link.href}">
                              <img class="profile-icon" src="${link.iconSrc}" alt="${link.name}"/>
                            </a>
                          </div>
                      `
                        )
                        .join('')}
                    </div>
                </div>
            </div>
            <div class="profile-title">
                👩🏻‍💻 About Me
            </div>
            <div class="profile-description">
                안녕하세요. 통찰력 있는 <b>프론트엔드 개발자</b>를 지망하는 장희영입니다.<br/>
                <b>폭넓은 시야</b>를 가지고 다양한 기술에 대한 이해를 높임으로써 <b>보다 나은 서비스</b>를 만들어내는 개발자가 되고 싶습니다.<br/>
            </div>
            <div class="profile-iam-title">
              저는 <div></div>
            </div>
            <div class="profile-iam-content">
            •&nbsp;&nbsp;읽기 쉽고 유지보수가 용이한 코드를 작성하기 위해 고민합니다.<br/>
            •&nbsp;&nbsp;서비스의 성격과 사용 목적에 부합하는 기술을 선택하기 위해 고민합니다.<br/>
            •&nbsp;&nbsp;프론트엔드 개발을 가장 즐기지만 백엔드 개발과 인프라에 대해서도 관심이 있습니다.
            </div>
        </div>
    `;
  }
  mounted() {}
}
