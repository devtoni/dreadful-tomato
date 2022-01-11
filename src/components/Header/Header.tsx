import { Link } from 'react-router-dom';
import IconLogin from '../../assets/icon-login.png';
import Button from 'carbon-components-react/lib/components/Button';
import Navigation from './Navigation/Navigation';
import Logo from '../Logo/Logo';

import './header.scss';

type Props = {
  children?: React.ReactNode;
};

function Header({ children }: Props) {
  return (
    <div className="bx--grid header">
      <div className="bx--row ">
        <div className="bx--col header__section">
          <h1>
            <Link to="/">
              <Logo />
            </Link>
          </h1>
        </div>
        <div className="bx--col header__section">{children}</div>
        <div className="bx--col bx--offset-lg-3 header__section">
          <div className="bx--row">
            <div className="bx--col">
              <Button>
                Login <img src={IconLogin} alt="icon login" />
              </Button>
            </div>
            <div className="bx--col">
              <Button className="header__cta-start-free-trial">Start your free trial</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Attach composable components to the Header
Header.Navigation = Navigation;

export default Header;
