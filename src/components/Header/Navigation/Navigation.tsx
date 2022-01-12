import { Link, NavLink } from 'react-router-dom';
import IconMovies from '../../../assets/icon-movies.png';
import IconSeries from '../../../assets/icon-series.png';

import './navigation.scss';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list" aria-label="navigation list">
        <li className="navigation__list-item">
          <NavLink to="movies">
            <img src={IconMovies} alt="icon movies" />
            Movies
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink to="series">
            <img src={IconSeries} alt="icon series" />
            Series
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
