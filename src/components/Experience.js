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
        ],
      },
      {
        name: '42 Seoul 9기 Cadet',
        term: '2023.02. ~ 2023.12. (10개월)',
        descriptions: [
          'C 언어를 사용하는 유닉스 개발 환경에서 셸, 터미널, 함수에 대해 <a target="_blank" href="https://github.com/klloo/42seoul">학습</a>',
          '동료 학습 기반의 과제 진행',
        ],
      },
    ];

    return `
      <div>
        <div class="experience-title">경력/경험</div>
        <div class="experience-content">
          ${experienceList
            .map(
              (experience, i) => `
              <div class="${
                i < experienceList.length - 1 ? 'experience-item' : ''
              }">
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
