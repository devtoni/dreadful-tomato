import { MediaContent } from '../../../types/MediaContent';
import { ReactComponent as CalendarIcon } from '../../../assets/calendar.svg';

import './content-card.scss';

type Props = {
  content: MediaContent;
};

function ContentCard({ content }: Props) {
  return (
    <div className="content-card">
      <img src={content.images['Poster Art'].url} alt={content.title} loading="lazy" />
      <div className="content-card__content">
        <h3 className="content-card__title">{content.title}</h3>
        <p className="content-card__year">
          <CalendarIcon />
          {content.releaseYear}
          </p>
        <p className="content-card__description"> {content.description}</p>
      </div>
    </div>
  );
}

export default ContentCard;
