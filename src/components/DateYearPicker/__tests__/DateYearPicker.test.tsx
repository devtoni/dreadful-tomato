import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DateYearPicker from '../DateYearPicker';

describe('DateYearPicker', () => {
  it('should display a placeholder when no year is selected', () => {
    render(<DateYearPicker onChange={() => {}} selected={null} placeholderText="1900-2022" />);

    const input = screen.getByPlaceholderText('1900-2022');

    expect(input).toBeVisible();
  });

  it('should display the year we pass as selected', () => {
    const year = new Date('2022').getFullYear();
    const expectedInputValue = String(year)
    render(<DateYearPicker onChange={() => {}} selected={year} placeholderText="1900-2022" />);

    const input = screen.getByPlaceholderText('1900-2022') as HTMLInputElement;

    expect(input.value).toEqual(expectedInputValue);
  });

  it('should trigger on change with the selected year', async () => {
    const onChangeSpy = jest.fn();
    const { container } = render(
      <DateYearPicker onChange={onChangeSpy} selected={null} placeholderText="1900-2022" />
    );

    const input = screen.getByPlaceholderText('1900-2022') as HTMLInputElement;

    await act(async () => {
      await userEvent.click(input);
    });

    const firstYearBoxText = container.querySelector(
      '.react-datepicker__year-text'
    ) as HTMLDivElement;

    await act(async () => {
      await userEvent.click(firstYearBoxText);
    });

    expect(onChangeSpy).toHaveBeenCalledWith(Number(firstYearBoxText.textContent));
  });
});
