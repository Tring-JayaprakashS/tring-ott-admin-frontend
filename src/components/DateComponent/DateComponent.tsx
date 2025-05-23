import React from 'react';
import Styles from './DateComponent.module.scss';
import { IC_CALENDER } from '../../utlis/images';

type CustomDateInputProps = {
  value?: string;
  onClick?: () => void;
  placeholder?: string;
  iconUrl?: string;
};

const DateComponent = React.forwardRef<HTMLInputElement, CustomDateInputProps>(
  ({ value, onClick, placeholder = 'MM/DD/YYYY', iconUrl }: any, ref) => (
    <div className={Styles.date_wrapper} onClick={onClick}>
      <input
        type='text'
        className={`${Styles.input_field} ${Styles.date_field}`}
        placeholder={placeholder}
        value={value}
        readOnly
        ref={ref}
      />
      <div className={Styles.date_icon}>
        <img src={iconUrl || IC_CALENDER} alt='calendar' />
      </div>
    </div>
  )
);

export default DateComponent;
