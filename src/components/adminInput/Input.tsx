import React, { useRef, useState } from 'react';
import Styles from './Input.module.scss';
import {
  IC_CALENDER,
  IC_HIDE_EYE,
  IC_SHOW_EYE,
  IC_SELECT_ARROW_INPUT,
  IC_PHONE_COUNTRY_CODE,
} from '../../utlis/images';
import { getCountryCodeImage } from '../../utlis/helpers/ClientDetails';

type InputType = 'text' | 'password' | 'email' | 'phone' | 'date' | 'select';

interface SelectOption {
  value: string;
  label: string;
}

interface InputProps {
  label?: string;
  type: InputType;
  placeholder: string;
  value: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  name: string;
  showToogle?: boolean;
  className?: string;
  options?: SelectOption[];
  containerStyles?: string;
  inputStyles?: string;
  iconUrl?: string;
  labelStylses?: string;
  dateFormat?: string;
  countryCode?: string;
  onCountryCodeChange?: (code: string) => void;

  width?: string;
  height?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  name,
  showToogle = false,
  className = '',
  options = [],
  containerStyles = '',
  inputStyles = '',
  labelStylses = '',
  dateFormat = 'MM/DD/YYYY',
  countryCode,
  iconUrl,
  onCountryCodeChange,

  width,
  height,
}) => {
  const calenderinput = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    if (calenderinput.current) {
      calenderinput.current.focus();
      calenderinput.current.type = 'date';
      if (calenderinput.current.showPicker) {
        calenderinput.current.showPicker();
      } else {
        calenderinput.current.click();
      }
    }
  };
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const tooglepassword = (): void => {
    setShowPassword(!showPassword);
  };
  const inputType = type === 'password' && showPassword ? 'text' : type;

  const containerClass = `${Styles.input_container} ${containerStyles}`;

  const customInputStyle: React.CSSProperties = {};

  if (width) customInputStyle.width = width;
  if (height) customInputStyle.height = height;

  const labelClass = `${Styles.input_label} ${labelStylses}`;

  const inputClass = `${Styles.input_field} ${inputStyles} ${className}`;

  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <div className={Styles.select_wrapper}>
            <select
              name={name}
              value={value}
              onChange={onChange}
              className={`${inputClass} ${Styles.select_field}`}
              style={value ? {} : { color: '#2C2C2C66' }}>
              {!value && (
                <option value='' hidden>
                  {placeholder}
                </option>
              )}

              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className={Styles.select_option}>
                  {option.label}
                </option>
              ))}
            </select>

            <div className={Styles.select_arrow}>
              <img
                src={IC_SELECT_ARROW_INPUT}
                alt='select_arrow_input'
                className={Styles.select_arrow_img}
              />
            </div>
          </div>
        );

      case 'date':
        return (
          <div className={Styles.date_wrapper}>
            <input
              ref={calenderinput}
              type='text'
              placeholder={dateFormat}
              value={value}
              onChange={onChange}
              name={name}
              className={`${inputClass} ${Styles.date_field}`}
              onClick={(e) => {
                e.currentTarget.type = 'date';
                e.currentTarget.showPicker && e.currentTarget.showPicker();
              }}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = 'text';
              }}
            />
            <div className={Styles.date_icon} onClick={handleIconClick}>
              <img src={iconUrl || IC_CALENDER} alt='date icon' />
            </div>
          </div>
        );

      case 'phone':
        return (
          <div className={Styles.phone_wrapper}>
            {countryCode && (
              <div className={Styles.country_code}>
                <select
                  value={countryCode}
                  onChange={(e) =>
                    onCountryCodeChange && onCountryCodeChange(e.target.value)
                  }
                  className={Styles.code_select}>
                  <option value='+1'>+1</option>
                  <option value='+44'>+44</option>
                  <option value='+91'>+91</option>
                </select>
                <img
                  src={getCountryCodeImage(countryCode)}
                  alt={`${countryCode} flag`}
                  className={Styles.country_flag}
                />

                <div className={Styles.select_arrow_phone}>
                  <img
                    src={IC_PHONE_COUNTRY_CODE}
                    alt='select_arrow_input'
                    className={Styles.select_arrow_phone_img}
                  />
                </div>
              </div>
            )}
            <input
              type='tel'
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              name={name}
              className={`${inputClass} ${Styles.phone_field} ${countryCode ? Styles.with_code : ''}`}
            />
          </div>
        );

      default:
        return (
          <div className={Styles.input_wrapper}>
            <input
              type={inputType}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              name={name}
              className={inputClass}
            />
            {type === 'password' && showToogle && (
              <button
                type='button'
                className={Styles.toggle_button}
                onClick={tooglepassword}
                aria-label={showPassword ? 'Hide password' : 'Show password'}>
                {!showPassword ? (
                  <img
                    src={IC_HIDE_EYE}
                    alt='ic_hide_eye'
                    className={Styles.icon}
                  />
                ) : (
                  <img
                    src={IC_SHOW_EYE}
                    alt='ic_show_eye'
                    className={Styles.icon}
                  />
                )}
              </button>
            )}
          </div>
        );
    }
  };

  return (
    <div className={containerClass}>
      {label && <label className={labelClass}>{label}</label>}
      {renderInput()}
    </div>
  );
};

export default Input;
