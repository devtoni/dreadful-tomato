import { MediaContent } from '../types/MediaContent';

export type MediaContentData = {
  total: number;
  entries: MediaContent[];
};

const fetchContent = async (): Promise<MediaContentData | null> => {
  try {
    return await fetch('https://gitlab.com/-/snippets/2041384/raw/master/data.json').then((res) =>
      res.json()
    );
  } catch (error) {
    console.error('Could not fetch content', error);
    return null;
  }
};

export default fetchContent;
