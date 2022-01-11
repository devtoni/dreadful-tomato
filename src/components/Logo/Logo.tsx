import LogoImage from '../../assets/logo.png';

import './logo.scss';

function Logo() {
  return (
    <div className="logo">
      <span className="logo__assistive-text">Dreadful tomato</span>
      <img src={LogoImage} alt="dreadful tomato logo" />
    </div>
  );
}

export default Logo;
