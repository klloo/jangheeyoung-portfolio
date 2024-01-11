import Component from '../core/Component.js';
import GithubIcon from '../assets/images/github-icon.svg';
import LinkIcon from '../assets/images/link-icon.svg';
import Style from '../style/projects.css';
import RandpsImage1 from '../assets/images/randps.png';
import UndergroundImage1 from '../assets/images/undergnd.png';
import RandpsImage2 from '../assets/images/randps2.png';
import UndergroundImage2 from '../assets/images/undergnd2.png';
import StudyopsImage1 from '../assets/images/studyops1.png';
import StudyopsImage2 from '../assets/images/studyops2.png';
import StreakImage from '../assets/images/streak.png';

export default class Projects extends Component {
  template() {
    const projectList = [
      {
        name: 'GPGT 알고리즘 스터디 사이트',
        intro:
          '백준 온라인 저지와 solved.ac를 활용한 <b>알고리즘 스터디를 효율적으로 운영</b>할 수 있는 웹서비스입니다. <br/> 함께 알고리즘 스터디를 진행하던 친구와 스터디를 효율적으로 관리할 수 있는 서비스를 개발하면 좋겠다는 생각에서 시작했습니다.<br/>이에 따라 스터디원을 관리할 수 있는 몇 가지 기능을 개발하여 운영하기 시작하였고, 현재 <b>33명의 스터디원이 함께 사용</b>하고 있습니다. 이후에도 스터디원들의 동기 부여를 위해 서비스를 계속 확장해 나가고 있습니다.',
        members: '프론트엔드 개발자 2명, 백엔드 개발자 1명',
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
          '1일 1랜덤 문제 추천 및 추천 문제 풀이로 잔디 심기 기능',
          '문제풀이 현황, 포인트를 지표로 활용한 스터디 전반적인 통계 기능',
          '마크다운 게시판',
          '사용자, 경고, 포인트, 이벤트를 관리하는 관리자 전용 기능',
          '주차별로 문제를 설정할 수 있는 로드맵 기능',
          '로그 조회 시 무한 스크롤을 적용하여 네트워크 성능과 사용자 경험 동시 개선',
          'AWS EC2와 Docker를 통해 서비스를 배포하고 Github Actions으로 배포 자동화',
        ],
        github: 'https://github.com/klloo/react-randps-client',
        siteLink: 'https://randps.kr',
        image1: RandpsImage1,
        image2: RandpsImage2,
        troubleShooting: {
          trouble:
            "깃허브의 <b>'잔디 심기'와 유사한 기능을 개발</b>해야 했는데 참고할 만한 자료가 없었습니다.",
          process:
            '처음에는 유사한 코드나 라이브러리가 있을 것으로 예상했지만 해당 기능의 정확한 명칭도 알 수가 없었고 참고할 만한 내용 또한 찾을 수 없었습니다.<br/>' +
            '따라서 <b>직접 분석 후 개발</b>을 진행하기로 결정하였고, 깃허브 외에 해당 기능을 제공하는 웹사이트 2곳의 HTML 코드를 개발자 도구를 통해 조사했습니다. <br/>' +
            '각 칸을 생성하는 데 있어서 한 곳은 table 태그를 사용하고 있었고, 다른 두 곳은 svg 태그를 활용하고 있었습니다.',
          result:
            '각 칸을 객체로 관리하였고, 해당 객체에는 날짜, x좌표, y좌표, 그리고 해당 날짜의 수행 완료 여부를 담았습니다. <br/>' +
            '그리고 해당 칸들과 툴팁은 <b>svg 태그를 사용</b>하여 생성하는 것으로 결정하였습니다.<br/>' +
            '이 기능에서 각 칸은 열 방향의 순서로 관리되어야 했기 때문에 행과 열로 이루어진 table 태그보다는 각각의 요소를 svg로 관리하는 방식이 더 낫다고 판단하였기 때문입니다.<br/>' +
            "이러한 방식을 통해 '잔디 심기' 기능을 구현할 수 있었고, 처음 개발하는 기능이었지만 참고할 만한 코드가 없는 상황에서의 문제 해결 방식을 익힐 수 있는 기회를 얻을 수 있었습니다.",
          resultImage: StreakImage,
        },
      },
      {
        name: '스터디 관리 웹서비스 Study Ops',
        intro:
          '정기적으로 진행되는 <b>스터디 일정과 출결 관리</b>에 집중한 스터디 관리 웹 서비스입니다. <br/>해당 서비스에 등록된 스터디의 일정을 관리하고 출석 기능을 통해 출결 및 벌금 현황을 조회할 수 있습니다.',
        members: '프론트엔드 개발자 1명, 백엔드 개발자 1명, 디자이너 1명',
        role: '프론트엔드 개발, 기획',
        term: '2023.10. ~ 개발 진행 중',
        techStack: ['TypeScript', 'React', 'SWR', 'Emotion'],
        features: [
          '토큰 방식의 자체 로그인 기능, 소셜 로그인 기능(카카오) 구현',
          '스터디 일정 관리 캘린더 구현',
          '회원 간 스터디 초대, 수락 및 거절 기능',
          '스터디 출석 관리 및 출석 데이터를 활용한 벌금 및 정산 기능',
          'memoization을 통한 토큰 재발급 api 중복 호출 문제 해결',
          'Skeleton UI 적용으로 데이터 로드 시 사용자 경험 개선',
          '프로필 이미지 업로드 및 스터디 자료실 기능 구현 예정',
        ],
        github: 'https://github.com/StudyOps/react-ts-studyops-client',
        siteLink: 'https://studyops.site',
        image1: StudyopsImage1,
        image2: StudyopsImage2,
        troubleShooting: {
          trouble:
            'JWT 기반의 로그인 방식을 구현하기 위해 <b>Access 토큰과 Refresh 토큰의 저장 위치를 결정</b>해야 했습니다.',
          process:
            '각 토큰의 저장 위치를 결정할 때 주요 고려 사항은 <b>보안</b>이었습니다.<br/>Access 토큰의 경우, <b>로컬 변수</b>에 저장하면 보안성은 높아지지만 페이지를 새로고침 하거나 새 창에서 접속할 때마다 토큰을 재발급해야 한다는 단점이 있습니다.<br/>' +
            '다른 옵션으로는 <b>쿠키</b>와 <b>localStorage</b>가 있습니다. 쿠키는 CSRF 공격 위험이 있지만 localStorage는 XSS 취약점이 존재할 경우 토큰이 탈취될 위험이 있습니다.<br/>이 둘 중에서는 XSS 취약점이 프론트엔드에서 어느 정도 대응이 가능하며 기본적으로 React 환경에서는 XSS 공격이 방지 되기 때문에 localStorage가 나은 것으로 판단하였습니다.<br/>' +
            'Refresh 토큰 또한 Access 토큰과 같은 취약점을 고려해야 했습니다.',
          result:
            '<b>Access 토큰은 localStorage에 저장</b>하는 방식을 선택했습니다.<br/>' +
            '로컬 변수에 저장할 경우 새로고침을 할 때마다 재발급 요청을 보내는 것이 비효율적이라고 생각했고 XSS 취약점은 어느 저장 방식을 선택하든 고려해야 할 문제이기 때문에 조금 더 효율적이고 간단하게 구현할 수 있는 방식을 선택하게 되었습니다.<br/>' +
            '<b>Refresh 토큰</b>은 Access 토큰의 재발급을 위한 것으로 용도가 한정되어 있으며, CSRF 공격으로는 새로 발급받은 Access 토큰을 수령할 방법이 없기 때문에 쿠키에 저장해도 CSRF 공격으로부터 안전합니다.<br/>따라서 자바스크립트 코드로 접근이 불가능한 <b>httpOnly 쿠키</b>로 저장하여 XSS 공격도 방지하는 것이 최선이라고 판단하였습니다. <br/>',
          resultImage: null,
        },
      },
      {
        name: 'Underground 독립영화제 페이지',
        intro:
          '독립영화 플랫폼 Underground에서 주최하는 <b>온라인 영화제 페이지를 개발</b>하였습니다.<br/> 2023년 11월 16일부터 3일간 몬터레이베이 캘리포니아주립대학교 학생들이 제작한 영화로 온라인 영화제를 진행하였으며 총 5개의 영화가 출품되었고 한 편 당 평균 30회의 조회 수를 달성하였습니다.',
        members:
          '프론트엔드 개발자 2명, 백엔드 개발자 1명, 기획자 1명, 디자이너 1명, 인프라 1명',
        role: '사용자 페이지 프론트엔드 개발',
        term: '2023.09. ~ 2023.11.',
        techStack: ['TypeScript', 'React', 'ReactQuery', 'Emotion'],
        features: [
          '토큰 방식의 자체 로그인 기능',
          'react-player를 커스텀 하여 비디오 플레이어 구현',
          '영화 등록 요청 기능 개발(영화 파일, 자막 파일, 영화 정보 입력)',
          '공지사항 조회, 문의 등록 및 조회 기능',
          'react-i18next를 활용한 다국어 처리',
        ],
        github: 'https://github.com/klloo/react-ts-underground-client',
        siteLink: 'https://undergnd.com',
        image1: UndergroundImage1,
        image2: UndergroundImage2,
        troubleShooting: {
          trouble:
            '<b>API 요청 및 응답 처리 중에 중복 코드</b>가 반복하여 작성되고 있었습니다.',
          process:
            '이 프로젝트에서는 axios 요청을 전송하는 Promise들을 따로 관리하고 있었고 API 요청에 대한 응답의 형태가 일관되어 있습니다.<br/>' +
            '따라서 이 구조에 맞게 <b>axios 요청을 공통으로 처리할 수 있는 커스텀 훅을 구현</b>했습니다.<br/>' +
            '이 훅은 axios 요청 Promise를 매개변수로 받아 해당 함수로 요청을 보내고, 응답 상태를 확인하여 에러 또는 응답 데이터를 반환하는 Promise를 생성합니다.<br/>' +
            '그리고 요청 자체가 실패한 경우에는 서버에 문제가 발생했음을 알리는 메시지를 표시하여 공통 에러 처리를 수행하도록 구현하였습니다.',
          result:
            '요청에 대한 응답을 확인하는 중복 코드를 매번 작성하지 않아도 되었고, 모든 응답 값 확인이 커스텀 훅에서 이루어지기 때문에 나중에 응답 형태가 변경되더라도 쉽게 대응할 수 있는 구조로 유지 보수 또한 간편해졌습니다.',
          resultImage: null,
        },
      },
      {
        name: '개인 포트폴리오 웹페이지',
        intro:
          '직접 사용할 <b>포트폴리오 웹페이지를 개발</b>하였습니다. <br/> JavaScript와 Webpack을 사용하여 정적 웹사이트를 구현하고 Vercel을 통해 배포를 하였습니다.',
        members: null,
        role: '프론트엔드 개발',
        term: '2023.12.',
        techStack: ['JavaScript', 'Webpack', 'Vercel'],
        features: [
          '다크 모드 기능 구현',
          'Webpack을 사용하여 모듈 번들링',
          '클래스 형 컴포넌트 기반의 모듈 시스템을 구현하여 생산성 향상',
        ],
        github: 'https://github.com/klloo/jangheeyoung-portfolio',
        siteLink: 'https://jangheeyoung-portfolio.vercel.app',
        image1: null,
        image2: null,
        troubleShooting: {
          trouble:
            '포트폴리오를 작성하는 과정에서 중복되는 형식이 많았고, 포트폴리오의 특성상 빈번한 수정이 필요할 것으로 예상되어 <b>생산성과 유지 보수 측면을 고려</b>해야 했습니다.',
          process:
            '중복 코드를 피하고 생산성을 높이기 위해 리액트 환경과 비슷하게 컴포넌트 기반으로 개발하는 것이 좋겠다고 판단했습니다.<br/>' +
            '이에 따라 구글링의 도움으로 <b>클래스 형 컴포넌트를 구현</b>하고, 코드를 모듈화하여 컴포넌트를 분할했습니다.<br/>' +
            '그 후에는 Webpack 설정을 통해 모듈화된 코드를 번들링하고, Webpack dev server 설정으로 개발 환경에서도 번들링 된 결과물을 확인할 수 있도록 했습니다.',
          result:
            '중복되는 코드들을 컴포넌트로 분리하여 개발 생산성을 향상시키면서 유지 보수성도 높일 수 있었습니다.<br/>' +
            '컴포넌트의 상태가 변경되면 해당 컴포넌트를 다시 렌더링 하는 과정을 직접 구현하면서, 리액트의 useState 훅과 클래스 형 컴포넌트의 생명주기에 대해 더 깊게 이해할 수 있었습니다.',
          resultImage: null,
        },
      },
      {
        name: 'CMP (Cloud Management Platform)',
        intro:
          '(주)와치텍에서 오픈스택으로 <b>클라우드 환경을 구축하고 관리할 수 있는 플랫폼</b>을 개발하였습니다. <br/> 클라우드 환경을 구축하는 워크플로의 통합 관리 기능과 구축된 클라우드 자원들을 모니터링하고 효율적으로 관리할 수 있는 기능을 사용자 및 관리자의 관점에서 기획하고 개발하는 업무를 담당하였습니다.',
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
          '클라우드 서비스 요청 관련 워크플로 정보 조회, 푸시 알림 기능 개발',
        ],
        github: null,
        siteLink: null,
        image1: null,
        image2: null,
        troubleShooting: null,
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
          <div class="projects-item-intro-wrapper">
            <div>
              <div class="projects-item-title">
                ${project.name}
              </div>
              <div class="projects-item-term">
                ${project.term} | ${project.role}
              </div>
              <div class="projects-item-link-list">
                ${
                  project.siteLink !== null
                    ? `
                      <div class="projects-item-link-wrapper">
                        <img class="projects-item-icon" src="${LinkIcon}" alt="${project.name}-link">
                        <a target="_blank" href="${project.siteLink}">
                          ${project.siteLink}
                        </a>
                      </div>
                    `
                    : ''
                }
                ${
                  project.github !== null
                    ? `
                      <div class="projects-item-link-wrapper">
                        <img class="projects-item-icon" src="${GithubIcon}" alt="${project.name}-github">
                        <a target="_blank" href="${project.github}">
                          ${project.github}
                        </a>
                      </div>
                    `
                    : ''
                }
              </div>
              <div class="projects-item-image-wrapper">
                ${
                  project.image1 !== null
                    ? `
                <img class="projects-item-image" src=${project.image1}/>`
                    : ''
                }
                ${
                  project.image2 !== null
                    ? `
                <img class="projects-item-image" src=${project.image2}/>`
                    : ''
                }
              </div>
              <div class="projects-item-desc">${project.intro}</div>
            </div>
          </div>
          ${
            project.members !== null
              ? `
                <div class="projects-item-label">프로젝트 인원</div>
                <div class="projects-item-desc">${project.members}</div>
              `
              : ''
          }
          <div class="projects-item-label">구현 기능</div>
          <div class="projects-item-desc">
            ${project.features.map((desc) => `• ${desc}<br/>`).join('')}
          </div> 
          <div class="projects-item-label">사용 기술</div>
          <div class="projects-item-techstack-wrapper">
            ${project.techStack
              .map(
                (tech) => `<div class="projects-item-tech-tag">${tech}</div>`
              )
              .join('')}
          </div>
          ${
            project.troubleShooting
              ? `
            <div class="projects-item-label troubleshooting">Troubleshooting</div>
            <div class="projects-item-desc">
              <div class="projects-item-sub-label">• 문제 상황</div>
              <div class="projects-item-sub-desc">${
                project.troubleShooting.trouble
              }</div>
              <div class="projects-item-sub-label">• 해결 과정</div>
              <div class="projects-item-sub-desc">${
                project.troubleShooting.process
              }</div>
              <div class="projects-item-sub-label">• 결과</div>
              ${
                project.troubleShooting.resultImage
                  ? `
                  <div class="projects-item-sub-desc">
                    <img class="projects-item-result-image" src=${project.troubleShooting.resultImage}/>
                  </div>`
                  : ''
              }
              <div class="projects-item-sub-desc">${
                project.troubleShooting.result
              }</div>
            </div> 
          `
              : ''
          }
        </div>
      `
        )
        .join('')}
    </div>
    </div>
    `;
  }
}
