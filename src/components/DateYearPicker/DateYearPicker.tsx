import ReactDatePicker, { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import { ReactComponent as ChevronLeftIcon } from '../../assets/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from '../../assets/chevron-right.svg';

import 'react-datepicker/dist/react-datepicker.css';
import './date-year-picker.scss';

type Props = {
  onChange: (date: Date | null) => void;
  selected: Date | null;
  placeholderText?: string;
};

function CustomHeader({ date, increaseYear, decreaseYear }: ReactDatePickerCustomHeaderProps) {
  return (
    <div className="date-year-picker__header">
      <ChevronLeftIcon onClick={decreaseYear} />
      {date.getFullYear()}
      <ChevronRightIcon onClick={increaseYear} />
    </div>
  );
}

function DatePicker({ onChange, selected, placeholderText = '1920-2022' }: Props) {
  return (
    <ReactDatePicker
      renderCustomHeader={CustomHeader}
      wrapperClassName="date-year-picker"
      selected={selected}
      onChange={(date) => onChange(date)}
      showYearPicker
      placeholderText={placeholderText}
      yearItemNumber={12}
      dateFormat="yyyy"
    />
  );
}

export default DatePicker;
