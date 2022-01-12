import { ReactComponent as ChevronLeftIcon } from '../../assets/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from '../../assets/chevron-right.svg';

import './pagination.scss';

type Props = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  handleChangePage: (newPage: number) => void;
};

function Pagination({ totalItems, itemsPerPage, currentPage, handleChangePage }: Props) {
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const FIRST_PAGE = 1;

  const isCurrentPage = (page: number) => page === currentPage;

  const handleClickPageItem = ({ target }: any) => {
    if (target.nodeName === 'LI') {
      const pageNumber = Number(target.textContent);

      pageNumber !== currentPage && handleChangePage(pageNumber);
    }
  };

  const handleClickChevronRight = (event: any) => {
    event.stopPropagation();
    currentPage !== numberOfPages && handleChangePage(currentPage + 1);
  };

  const handleClickChevronLeft = (event: any) => {
    event.stopPropagation();
    currentPage !== FIRST_PAGE && handleChangePage(currentPage - 1);
  };

  const setChevronClasses = (conditionMet: boolean) =>
    `pagination__chevron ${conditionMet ? 'pagination__chevron--active' : ''}`;

  const renderPaginationItems = () =>
    Array.from(Array(numberOfPages).keys()).map((_position, idx) => {
      const page = idx + 1;
      const pageIsCurrent = isCurrentPage(page);

      return (
        <li
          aria-current={pageIsCurrent}
          className={`pagination__item ${pageIsCurrent ? 'pagination__item--active' : ''}`}
          key={idx}
        >
          {page}
        </li>
      );
    });

  return (
    <ul className="pagination" onClick={handleClickPageItem} aria-label="pagination navigation">
      <li className="pagination__item">
        <ChevronLeftIcon
          aria-disabled={currentPage === FIRST_PAGE}
          className={setChevronClasses(currentPage > FIRST_PAGE)}
          onClick={handleClickChevronLeft}
        />
      </li>
      {renderPaginationItems()}
      <li className="pagination__item">
        <ChevronRightIcon
          aria-disabled={currentPage === numberOfPages}
          className={setChevronClasses(currentPage < numberOfPages)}
          onClick={handleClickChevronRight}
        />
      </li>
    </ul>
  );
}

export default Pagination;
