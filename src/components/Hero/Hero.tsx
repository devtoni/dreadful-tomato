import { Link } from 'react-router-dom';
import MoviesImage from '../../assets/movies.png';
import SeriesImage from '../../assets/series.png';

import './hero.scss';

function Hero() {
  return (
    <div className="hero bx--grid">
      <Link to="/search/movies">
        <div className="hero__block">
          <div className="hero-image__container">
            <img src={MoviesImage} alt="Movies image" />
            <div className="hero-image__text">Movies</div>
          </div>
        </div>
      </Link>

      <Link to="/search/movies">
        <div className="hero__block">
          <div className="hero-image__container">
            <img src={SeriesImage} alt="Series image" />
            <div className="hero-image__text">Series</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Hero;
