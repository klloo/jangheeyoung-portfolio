import Component from '../core/Component.js';
import GithubIcon from '../assets/images/github-icon.svg';
import LinkIcon from '../assets/images/link-icon.svg';
import Style from '../style/projects.css';

export default class Projects extends Component {
  template() {
    const projectList = [
      {
        name: 'GPGT 알고리즘 스터디 사이트',
        intro:
          '백준 온라인 저지와 solved.ac를 활용한 <b>알고리즘 스터디를 효율적으로 운영</b>할 수 있는 웹서비스 입니다. <br/> 함께 알고리즘 스터디를 진행하던 친구와 스터디를 효율적으로 관리할 수 있는 서비스를 개발하면 좋겠다는 생각에서 시작했습니다.<br/>이에 따라 스터디원을 관리할 수 있는 몇 가지 기능을 개발하여 운영하기 시작하였고, 스터디원들의 동기 부여를 위해 서비스를 계속 확장해 나가고 있습니다.',
        members: '프론트엔드 개발자 1명, 백엔드 개발자 1명',
        role: '프론트엔드 개발, 기획, 디자인, 배포',
        term: '2022.08. ~ 운영 중',
        techStack: [
          'JavaScript',
          'React',
          'SWR',
          'Emotion',
          'AWS',
          'Docker',
          'Spring',
          'Nginx',
          'Github Actions',
        ],
        features: [
          '사용자들의 문제풀이, 경고 현황 조회',
          '1일 1랜덤 문제 추천 및 스트릭 기능',
          '문제풀이 현황, 포인트를 지표로 활용한 스터디 전반적인 통계 기능',
          '마크다운 게시판',
          '사용자, 경고, 포인트, 이벤트를 관리하는 관리자 전용 기능',
          '알고리즘 로드맵 기능',
        ],
        github: 'https://github.com/klloo/react-randps-client',
        siteLink: 'https://randps.kr/login',
      },
      {
        name: '스터디 관리 웹서비스 Study Ops',
        intro:
          '정기적으로 진행되는 <b>스터디 일정과 출결 관리</b>에 집중한 스터디 관리 웹 서비스 입니다. <br/>',
        members: '프론트엔드 개발자 1명, 백엔드 개발자 1명, 디자이너 1명',
        role: '프론트엔드 개발, 기획',
        term: '2022.10. ~ 2022.12.',
        techStack: ['TypeScript', 'React', 'SWR', 'Emotion'],
        features: ['스터디 일정 관리 캘린더 구현'],
        github: 'https://github.com/StudyOps/react-ts-studyops-client',
        siteLink: null,
      },
      {
        name: 'CMP (Cloud Management Platform)',
        intro:
          '(주)와치텍에서 오픈스택으로 <b>클라우드 환경을 구축하고 관리할 수 있는 플랫폼</b>을 개발하였습니다. <br/> 클라우드 환경을 구축하는 워크플로우의 통합 관리 기능과 구축된 클라우드 자원들을 모니터링하고 효율적으로 관리할 수 있는 기능을 사용자 및 관리자의 관점에서 기획하고 개발하는 업무를 담당하였습니다.',
        members: null,
        role: '프론트엔드 개발, REST API 개발, 기획',
        term: '2022.02. ~ 2022.12.',
        techStack: [
          'JavaScript',
          'Vue2',
          'Element UI',
          'Highcharts',
          'Java',
          'Spring',
          'MyBatis',
          'MySQL',
          'SVN',
        ],
        features: [
          '클라우드 자원의 구성 및 성능 정보 모니터링 화면 개발',
          '클라우드 서비스 요청 관련 워크플로우 정보 조회, 푸시 알림 기능 개발',
          '클라우드 자원의 유휴 서비스 조회, 적정 사양 추천 기능 개발',
        ],
        github: null,
        siteLink: null,
      },
    ];
    return `
    <div>
      <div class="projects-title">
        <div>진행 프로젝트</div>
      </div>
      <div class="projects-content">
      ${projectList
        .map(
          (project) => `
        <div>
          <div class="projects-item-title">
            ${project.name}
            ${
              project.siteLink !== null
                ? `
                  <a target="_blank" href="${project.siteLink}">
                    <img class="projects-item-icon" src="${LinkIcon}" alt="${project.name}-link">
                  </a>
                `
                : ''
            }
            ${
              project.github !== null
                ? `
                  <a target="_blank" href="${project.github}">
                    <img class="projects-item-icon" src="${GithubIcon}" alt="${project.name}-github">
                  </a>
                `
                : ''
            }
          </div>
          <div class="projects-item-term">
            ${project.term} | ${project.role}
          </div>
          <div class="projects-item-desc">${project.intro}</div>
          ${
            project.members !== null
              ? `
                <div class="proejcts-item-label">프로젝트 인원</div>
                <div class="projects-item-desc">${project.members}</div>
              `
              : ''
          }
          <div class="proejcts-item-label">구현 기능</div>
          <div class="projects-item-desc">
            ${project.features.map((desc) => `• ${desc}<br/>`).join('')}
          </div> 
          <div class="proejcts-item-label">사용 기술</div>
          <div class="proejcts-item-techstack-wrapper">
            ${project.techStack.map((tech) => `<div>${tech}</div>`).join('')}
          </div>
        </div>
      `
        )
        .join('')}
    </div>
    </div>
    `;
  }
}
