import { useEffect } from 'react';
import { useContentManagerContext } from '../../context/ContentManagerContext';
import { ProgramTypeContent } from '../../types/MediaContent';
import ContentList from '../ContentList/ContentList';
import Pagination from '../Pagination/Pagination';

import './grid-content.scss';

type Props = {
  programType: ProgramTypeContent;
  title: string;
};

function GridContent({ programType, title }: Props) {
  const { updateFilteredContent, filteredContent, contentLoaded, pagination } =
    useContentManagerContext();

  useEffect(() => {
    updateFilteredContent({ programType });
  }, [contentLoaded]);

  return (
    <div className="grid-content">
      {contentLoaded && filteredContent?.entries.length ? (
        <>
          <h2>{title}</h2>
          <ContentList content={filteredContent.entries} />
          <Pagination
            totalItems={pagination.totalItems}
            itemsPerPage={pagination.itemsPerPage}
            handleChangePage={(newPage: number) =>
              updateFilteredContent({ programType, pageNumber: newPage })
            }
            currentPage={pagination.currentPage}
          />
        </>
      ) : (
        <h2>No Content</h2>
      )}
    </div>
  );
}

export default GridContent;
