import React from 'react';
import Styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'transparent' | 'disable';
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  onClick,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` ${Styles.button} ${Styles[`button_${variant}`]} ${
        fullWidth ? Styles.button_fullWidth : ''
      } ${className}`}>
      {children}
    </button>
  );
};

export default Button;
