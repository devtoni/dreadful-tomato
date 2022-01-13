import { createContext, useContext, useEffect, useState } from 'react';
import fetchContent, { MediaContentData } from '../services/fetchContent';
import { ProgramTypeContent } from '../types/MediaContent';

export type ContentManagerProviderProps = {
  children: React.ReactNode;
};

type PaginationData = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
};

type FilterQueryContent = {
  programType: ProgramTypeContent;
  searchByTitle?: string;
  releaseYear?: number | null;
  pageNumber?: number;
};

const ITEMS_PER_PAGE = 10;

type ContentManagerContextValue = {
  filteredContent: MediaContentData;
  updateFilteredContent: (filterQueryContent: FilterQueryContent) => void;
  contentLoaded: boolean;
  pagination: PaginationData;
};

const ContentManagerContext = createContext<ContentManagerContextValue>(null!);

const ContentManagerProvider = ({ children }: ContentManagerProviderProps) => {
  const [content, setContent] = useState<MediaContentData>(null!);
  const [contentLoaded, setContentIsLoaded] = useState(false);
  const [filteredContent, setFilteredContent] = useState<MediaContentData>(null!);
  const [pagination, setPagination] = useState<PaginationData>(null!);

  useEffect(() => {
    fetchContent()
      .then((content) => {
        if (content) {
          setContent(content);
        }
      })
      .then(() => setContentIsLoaded(true));
  }, []);

  const updateFilteredContent = ({
    programType,
    searchByTitle,
    releaseYear,
    pageNumber = 1
  }: FilterQueryContent) => {
    setContentIsLoaded(false);

    const searchByTitleToLowerCase = searchByTitle?.toLowerCase() || '';

    const filteredData = content.entries
      .filter((entry) => entry.programType === programType)
      .filter((movie) => movie.title.toLowerCase().includes(searchByTitleToLowerCase))
      .filter((movie) => (releaseYear ? movie.releaseYear === releaseYear : true));

    const filteredDataWithPagination = filteredData.slice(
      (pageNumber - 1) * ITEMS_PER_PAGE,
      pageNumber * ITEMS_PER_PAGE
    );

    setFilteredContent({ total: filteredData.length, entries: filteredDataWithPagination });
    setPagination({
      totalItems: filteredData.length,
      itemsPerPage: ITEMS_PER_PAGE,
      currentPage: pageNumber
    });

    setContentIsLoaded(true);
  };

  return (
    <ContentManagerContext.Provider
      value={{
        filteredContent,
        updateFilteredContent,
        contentLoaded,
        pagination
      }}
    >
      {children}
    </ContentManagerContext.Provider>
  );
};

const useContentManagerContext = () => useContext(ContentManagerContext);

export { ContentManagerProvider, useContentManagerContext };
