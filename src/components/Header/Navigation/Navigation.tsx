import { Children } from 'react';
import { NavLink } from 'react-router-dom';
import IconMovies from '../../../assets/icon-movies.png';
import IconSeries from '../../../assets/icon-series.png';

import './navigation.scss';

type Props = {
  children?: React.ReactNode;
};

function Navigation({ children }: Props) {
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
        {children &&
          Children.toArray(children).map((child) => (
            <li className="navigation__list-item">
              {child}
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Navigation;
