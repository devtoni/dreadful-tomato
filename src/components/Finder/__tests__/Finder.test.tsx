import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Finder from '../Finder';

describe('Finder', () => {
  it('should update through its callback with the values that user types', async () => {
    const handleSearchMock = jest.fn();
    const { container } = render(<Finder handleSearch={handleSearchMock} />);
    const inputSearch = screen.getByPlaceholderText('Search');
    const inputDateYearPicker = screen.getByPlaceholderText('1920-2022');


    await act(async () => {
      await userEvent.type(inputSearch, 's');

      await userEvent.click(inputDateYearPicker);
    });

    const firstYearBoxText = container.querySelector(
      '.react-datepicker__year-text'
    ) as HTMLDivElement;

    await act(async () => {
      await userEvent.click(firstYearBoxText);
    });

    const [firstCall, secondCall] = handleSearchMock.mock.calls;

    expect(firstCall).toEqual(['s', null]);
    expect(secondCall).toEqual(['s', Number(firstYearBoxText.textContent)]);
  });
});
