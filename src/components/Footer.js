import Component from '../core/Component.js';
import Style from '../style/footer.css';

export default class Footer extends Component {
  template() {
    return `
        <div class="footer-wrapper">
            <div> © 2023. 장희영 All rights reserved. </div>
        </div>
    `;
  }
}
