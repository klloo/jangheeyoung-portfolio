import Component from '../core/Component.js';
import Style from '../style/experience.css';

export default class Experience extends Component {
  template() {
    const experienceList = [
      {
        name: '상명대학교 컴퓨터과학과',
        term: '2017.03. ~ 2021.08. | 평점평균 : 4.05 / 4.50 | 졸업',
        descriptions: [
          '교내 튜터링 활동 (C프로그래밍, 자료구조, 알고리즘)',
          '교내 캡스톤 경진대회 최우수상 수상 (<a target="_blank" href="https://cs.smu.ac.kr/cs/community/graduation.do?mode=view&articleNo=712204&article.offset=0&articleLimit=30#/list">악보 생성 애플리케이션</a>)',
        ],
      },
      {
        name: '(주)와치텍 프론트엔드 개발/기획 업무 담당',
        term: '2021.08. ~ 2023.01. (1년 6개월) | 클라우드팀 사원 | 퇴사',
        descriptions: [
          '인프라 관제 솔루션 회사의 클라우드 관리 플랫폼 개발 팀에서 근무',
          '코드 리뷰, 사내 기술 세미나를 통해 개발 역량 강화',
          '프로젝트 일련의 과정을 경험하며 팀원들과 협업하는 방식 및 개발 일정을 관리하는 방식에 대해 배웠습니다.',
        ],
      },
      {
        name: '42 Seoul 9기 Cadet',
        term: '2023.02. ~ 2023.12. (10개월)',
        descriptions: [
          'C 언어를 사용하는 유닉스 개발 환경에서 셸, 터미널, 함수에 대해 <a target="_blank" href="https://github.com/klloo/42seoul">학습</a>',
          '모든 과제를 동료 학습 기반으로 진행하였고, 이 과정에서 다양한 동료들과 의사소통하며 경험을 공유하는 방식에 대해 배웠습니다.',
        ],
      },
    ];

    return `
      <div>
        <div class="experience-title">경력/경험</div>
        <div class="experience-content">
          ${experienceList
            .map(
              (experience) => `
              <div>
                <div class="experience-item-title">
                  <div>${experience.name}</div> 
                </div>
                <div class="experience-item-term">${experience.term}</div> 
                <div class="experience-item-desc">
                ${experience.descriptions
                  .map((desc) => `• ${desc}<br/>`)
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
