import { createContext, useContext, useEffect, useState } from 'react';
import fetchContent, { MediaContentData } from '../services/fetchContent';

export type ContentManagerProviderProps = {
  children: React.ReactNode;
};

type ContentManagerContextValue = {
  content: MediaContentData;
};

const ContentManagerContext = createContext<ContentManagerContextValue>(null!);

const ContentManagerProvider = ({ children }: ContentManagerProviderProps) => {
  const [content, setContent] = useState<MediaContentData>(null!);

  useEffect(() => {
    fetchContent().then((content) => {
      if (content) {
        setContent(content);
      }
    });
  }, []);

  return (
    <ContentManagerContext.Provider value={{ content }}>{children}</ContentManagerContext.Provider>
  );
};

const useContentManagerContext = () => useContext(ContentManagerContext);

export { ContentManagerProvider, useContentManagerContext };
