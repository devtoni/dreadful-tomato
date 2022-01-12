import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '../Pagination';

describe('Pagination', () => {
  it('should display a list of total pages with navigation', () => {
    const expectedTotalPagesWithNavigation = 12;
    render(
      <Pagination totalItems={100} itemsPerPage={10} handleChangePage={jest.fn()} currentPage={1} />
    );

    const navigationList = screen.getByRole('list', { name: 'pagination navigation' });

    expect(navigationList.children.length).toEqual(expectedTotalPagesWithNavigation);
  });

  it('should know which page item is the current page', () => {
    const { container } = render(
      <Pagination totalItems={100} itemsPerPage={10} handleChangePage={jest.fn()} currentPage={3} />
    );

    const currentItem = container.querySelector('[aria-current="true"]');

    expect(currentItem?.textContent).toEqual('3');
  });

  it('should update with page number when navigation item is clicked', () => {
    const handleChangeMock = jest.fn();
    render(
      <Pagination
        totalItems={100}
        itemsPerPage={10}
        handleChangePage={handleChangeMock}
        currentPage={3}
      />
    );

    const { 1: firstPageItem } = screen.getAllByRole('listitem');
    userEvent.click(firstPageItem);

    expect(handleChangeMock).toHaveBeenCalledWith(1);
  });

  it('should not update with page number when clicked navigation item is the same as the current page', () => {
    const handleChangeMock = jest.fn();
    render(
      <Pagination
        totalItems={100}
        itemsPerPage={10}
        handleChangePage={handleChangeMock}
        currentPage={1}
      />
    );

    const { 1: firstPageItem } = screen.getAllByRole('listitem');
    userEvent.click(firstPageItem);

    expect(handleChangeMock).toHaveBeenCalledTimes(0);
  });

  it('should disable navigation left if the current page is the first and not allow update the page', () => {
    const handleChangeMock = jest.fn();

    const { container } = render(
      <Pagination totalItems={100} itemsPerPage={10} handleChangePage={jest.fn()} currentPage={1} />
    );

    const currentItem = container.querySelector('[aria-disabled="true"]') as Element;
    userEvent.click(currentItem);

    expect(currentItem).toBeVisible();
    expect(handleChangeMock).toHaveBeenCalledTimes(0);
  });

  it('should disable navigation right if the current page is the last and not allow update the page', () => {
    const handleChangeMock = jest.fn();
    const { container } = render(
      <Pagination
        totalItems={100}
        itemsPerPage={10}
        handleChangePage={handleChangeMock}
        currentPage={10}
      />
    );

    const currentItem = container.querySelector('[aria-disabled="true"]') as Element;
    userEvent.click(currentItem);

    expect(currentItem).toBeVisible();
    expect(handleChangeMock).toHaveBeenCalledTimes(0);
  });
});
