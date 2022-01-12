import ReactDatePicker, { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import { ReactComponent as ChevronLeftIcon } from '../../assets/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from '../../assets/chevron-right.svg';

import 'react-datepicker/dist/react-datepicker.css';
import './date-year-picker.scss';

type Props = {
  onChange: (year: number) => void;
  selected: number | null;
  placeholderText?: string;
};

function CustomHeader({ date, increaseYear, decreaseYear }: ReactDatePickerCustomHeaderProps) {
  return (
    <div className="date-year-picker__header">
      <ChevronLeftIcon onClick={decreaseYear} width={'24px'} />
      {date.getFullYear()}
      <ChevronRightIcon onClick={increaseYear} width={'24px'}  />
    </div>
  );
}

function DatePicker({ onChange, selected, placeholderText = '1920-2022' }: Props) {
  const selectedYearDate = selected ? new Date(String(selected)) : null;
  return (
    <ReactDatePicker
      renderCustomHeader={CustomHeader}
      wrapperClassName="date-year-picker"
      selected={selectedYearDate}
      onChange={(date) => {
        date ? onChange(date.getFullYear()) : onChange(new Date().getFullYear());
      }}
      showYearPicker
      placeholderText={placeholderText}
      yearItemNumber={12}
      dateFormat="yyyy"
    />
  );
}

export default DatePicker;
