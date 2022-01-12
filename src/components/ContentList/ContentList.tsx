import { MediaContent } from '../../types/MediaContent';
import ContentCard from './ContentCard/ContentCard';

import './content-list.scss';

type Props = {
  content: MediaContent[];
};

function ContentList({ content }: Props) {
  return (
    <ul className="content-list" aria-label="content list">
      {content.map((entry) => (
        <ContentCard key={entry.title} content={entry} />
      ))}
    </ul>
  );
}

export default ContentList;
