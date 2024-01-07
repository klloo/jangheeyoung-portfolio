import Component from '../core/Component.js';
import GithubIcon from '../assets/images/github-icon.svg';
import LinkIcon from '../assets/images/link-icon.svg';
import Style from '../style/projects.css';

export default class Projects extends Component {
  template() {
    const projectList = [
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
      {
        name: 'GPGT 알고리즘 스터디 사이트',
        intro:
          '백준 온라인 저지와 solved.ac를 활용한 <b>알고리즘 스터디를 효율적으로 운영</b>할 수 있는 웹서비스 입니다. <br/> 함께 알고리즘 스터디를 진행하던 친구와 스터디를 효율적으로 관리할 수 있는 서비스를 개발하면 좋겠다는 생각에서 시작했습니다.<br/>이에 따라 스터디원을 관리할 수 있는 몇 가지 기능을 개발하여 운영하기 시작하였고, 현재 <b>33명의 스터디원이 함께 사용</b>하고 있습니다. 이후에도 스터디원들의 동기 부여를 위해 서비스를 계속 확장해 나가고 있습니다.',
        members: '프론트엔드 개발자 1명, 백엔드 개발자 1명',
        role: '프론트엔드 개발, 기획, 디자인, 배포',
        term: '2023.08. ~ 운영 중',
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
          '토큰 방식의 자체 로그인 기능',
          '사용자들의 문제풀이, 경고 현황 조회',
          '1일 1랜덤 문제 추천 및 스트릭 기능',
          '문제풀이 현황, 포인트를 지표로 활용한 스터디 전반적인 통계 기능',
          '마크다운 게시판',
          '사용자, 경고, 포인트, 이벤트를 관리하는 관리자 전용 기능',
          '주차별로 문제를 설정할 수 있는 로드맵 기능',
        ],
        github: 'https://github.com/klloo/react-randps-client',
        siteLink: 'https://randps.kr/login',
      },
      {
        name: 'Underground 독립영화제 페이지',
        intro:
          '독립영화 플랫폼 Underground에서 주최하는 <b>온라인 영화제 페이지를 개발</b>하였습니다.<br/> 2023년 11월 16일 부터 3일 간 몬터레이베이 캘리포니아주립대학교 학생들이 제작한 영화로 온라인 영화제를 진행하였으며 <br/> 총 5개의 영화가 출품되었고 한 편당 평균 30회의 조회수를 달성하였습니다.',
        members:
          '프론트엔드 개발자 2명, 백엔드 개발자 1명, 기획자 1명, 디자이너 1명, 인프라 1명',
        role: '사용자 페이지 프론트엔드 개발',
        term: '2023.09. ~ 2023.11.',
        techStack: ['TypeScript', 'React', 'ReactQuery', 'Emotion'],
        features: [
          '토큰 방식의 자체 로그인 기능',
          'react-player를 커스텀하여 비디오 플레이어 구현',
          '영화 등록 요청 기능 개발(영화 파일, 자막 파일, 영화 정보 입력)',
          '공지사항 조회, 문의 등록 및 조회 기능',
          'react-i18next를 활용한 다국어 처리',
        ],
        github: 'https://github.com/klloo/react-ts-underground-client',
        siteLink: 'https://www.undergnd.com/',
      },
      {
        name: '스터디 관리 웹서비스 Study Ops',
        intro:
          '정기적으로 진행되는 <b>스터디 일정과 출결 관리</b>에 집중한 스터디 관리 웹 서비스 입니다. <br/>해당 서비스에 등록된 스터디의 일정을 관리하고 출석 기능을 통해 출결 및 벌금 현황을 조회할 수 있습니다.',
        members: '프론트엔드 개발자 1명, 백엔드 개발자 1명, 디자이너 1명',
        role: '프론트엔드 개발, 기획',
        term: '2023.10. ~ 개발 진행 중',
        techStack: ['TypeScript', 'React', 'SWR', 'Emotion'],
        features: [
          '토큰 방식의 자체 로그인 기능, 소셜 로그인 기능(카카오) 구현',
          '스터디 일정 관리 캘린더 구현',
          '회원간 스터디 초대, 수락 및 거절 기능',
          '스터디 출석 관리 기능',
          '출석 데이터를 활용한 벌금 및 정산 기능',
          '프로필 이미지 업로드 및 게시판 기능 구현 예정',
        ],
        github: 'https://github.com/StudyOps/react-ts-studyops-client',
        siteLink: null,
      },
      {
        name: '포트폴리오 웹페이지',
        intro:
          '직접 사용할 <b>포트폴리오 웹페이지를 개발</b>하였습니다. <br/> JavaScript와 Webpack을 사용하여 정적 웹사이트를 구현하고 Vercel을 통해 배포를 하였습니다.',
        members: null,
        role: '프론트엔드 개발',
        term: '2023.12.',
        techStack: ['JavaScript', 'Webpack', 'Vercel'],
        features: [
          '클래스형 컴포넌트 기반의 모듈 시스템 구현',
          'Webpack을 통해 모듈 번들링',
          '다크모드 기능 구현',
        ],
        github: 'https://github.com/klloo/jangheeyoung-portfolio',
        siteLink: 'https://jangheeyoung-portfolio.vercel.app/',
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
          (project, i) => `
          <div class="${i < projectList.length - 1 ? 'projects-item' : ''}">
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
            ${project.techStack
              .map(
                (tech) => `<div class="projects-item-tech-tag">${tech}</div>`
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
}
