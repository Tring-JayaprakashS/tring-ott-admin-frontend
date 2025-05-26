import { useRef, useState } from 'react';
import { IC_DROP_DOWN } from '../../utlis/images';
import styles from './AccessDropDown.module.scss';
import useClickOutside from '../../hooks/useClickOutside';
import { AccessDropDownProps } from '../../utlis/types/manageClientsType';

export const AccessDropDown = ({
  label,
  selectedValue,
  placeholder,
  options,
  onSelect,
}: AccessDropDownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  console.log('====');
  useClickOutside(dropdownRef, () => setIsDropdownOpen(false));

  const selectedOption = options.find((opt) => opt.name === selectedValue);

  return (
    <div className={styles.dropdown_wrap}>
      <label className={styles.dropdown_label}>{label}</label>
      <div className={styles.dropdown_container} ref={dropdownRef}>
        <div
          className={styles.dropdown_trigger}
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          role='button'
          tabIndex={0}>
          <span
            className={
              selectedOption
                ? styles.dropdown_selected
                : styles.dropdown_placeholder
            }>
            {selectedOption ? selectedOption.name : placeholder}
          </span>
          <div>
            <img
              src={IC_DROP_DOWN}
              alt='Dropdown'
              className={styles.filterit}
            />
          </div>
        </div>
        {isDropdownOpen && (
          <div className={styles.dropdown_options}>
            {options.map((option) => (
              <div
                key={option.id}
                className={styles.dropdown_option}
                onClick={() => {
                  onSelect(option);
                  setIsDropdownOpen(false);
                }}
                role='button'
                tabIndex={0}>
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
