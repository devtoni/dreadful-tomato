import LogoImage from '../../assets/logo.png';

import './logo.scss';

function Logo() {
  return (
    <div className="logo">
      <span className="logo__assistive-text">Dreadful tomatoes</span>
      <img src={LogoImage} alt="dreadful tomatoes logo" />
    </div>
  );
}

export default Logo;
