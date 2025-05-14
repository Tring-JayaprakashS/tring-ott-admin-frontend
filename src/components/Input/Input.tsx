import React, { useState } from 'react';
import Styles from './Input.module.scss';
import { IC_HIDE_EYE, IC_SHOW_EYE } from '../../utlis/images';

interface InputProps {
  label?: string;
  type: string;
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  showToogle?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  name,
  showToogle = false,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const tooglepassword = (): void => {
    setShowPassword(!showPassword);
  };
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={Styles.input_container}>
      {label && <label className={Styles.input_label}>{label}</label>}
      <div className={Styles.input_wrapper}>
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          className={Styles.input_field}
        />
        {type === 'password' && showToogle && (
          <button
            type='button'
            className={Styles.toogle_button}
            onClick={tooglepassword}
            aria-label={showPassword ? 'Hide password' : 'Show password'}>
            {!showPassword ? (
              <img src={IC_HIDE_EYE} className={Styles.icon} />
            ) : (
              <img src={IC_SHOW_EYE} className={Styles.icon} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
