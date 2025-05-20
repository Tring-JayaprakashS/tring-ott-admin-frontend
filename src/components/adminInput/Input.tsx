import React, { useState } from 'react';
import Styles from './Input.module.scss';
import { IC_HIDE_EYE, IC_SHOW_EYE } from '../../utlis/images';

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
  icon?: React.ReactNode;
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
  icon,
  onCountryCodeChange,

  width,
  height,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const tooglepassword = (): void => {
    setShowPassword(!showPassword);
  };
  const inputType = type === 'password' && showPassword ? 'text' : type;

  const containerClass = `${Styles.input_container} ${containerStyles}`;

  const customContainerStyle: React.CSSProperties = width ? { width } : {};
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
              className={`${inputClass} ${Styles.select_field}`}>
              <option value='' disabled selected>
                {placeholder}
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className={Styles.select_arrow}></div>
          </div>
        );

      case 'date':
        return (
          <div className={Styles.date_wrapper}>
            <input
              type='text'
              placeholder={dateFormat}
              value={value}
              onChange={onChange}
              name={name}
              className={`${inputClass} ${Styles.date_field}`}
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = 'text';
              }}
            />
            <div className={Styles.date_icon}>
              {icon || (
                <svg
                  viewBox='0 0 24 24'
                  width='18'
                  height='18'
                  stroke='currentColor'
                  fill='none'>
                  <rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
                  <line x1='16' y1='2' x2='16' y2='6'></line>
                  <line x1='8' y1='2' x2='8' y2='6'></line>
                  <line x1='3' y1='10' x2='21' y2='10'></line>
                </svg>
              )}
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
