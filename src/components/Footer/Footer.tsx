import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import AppStoreImage from '../../assets/app store.png';
import GooglePlayImage from '../../assets/google-play.png';

import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="bx--grid">
        <div className="bx--row footer__section">
          <Logo />
        </div>

        <div className="bx--row footer__section">
          <ul className="footer__section-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Manage Account</a>
            </li>
          </ul>
        </div>

        <div className="bx--row footer__section">
          <img src={AppStoreImage} alt="App store image" />
          <img src={GooglePlayImage} alt="Google play image" />
        </div>

        <div className="bx--row footer__section">
          <small>
            Copyright {new Date().getFullYear()} Dreadful Tomato Streaming. All Rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
