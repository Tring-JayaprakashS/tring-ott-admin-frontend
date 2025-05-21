import React, { useState } from 'react';
import { IC_SELECT_ARROW_INPUT } from '../../utlis/images';
import styles from './MultiSelectDropdown.module.scss';

type Option = { id: string; name: string };

type CheckboxMultiSelectDropdownProps = {
  label?: string;
  selected: string[];
  options: Option[];
  onChange: (selectedIds: string[]) => void;
  placeholder?: string;
};

export const CheckboxMultiSelectDropdown: React.FC<
  CheckboxMultiSelectDropdownProps
> = ({
  label,
  selected,
  options,
  onChange,
  placeholder = 'Select options',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (id: string) => {
    const updatedSelected = selected.includes(id)
      ? selected.filter((itemId) => itemId !== id)
      : [...selected, id];

    onChange(updatedSelected);
  };

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(`.${styles.container}`)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.selectWrapper}>
        <div className={styles.selectBox} onClick={toggleDropdown}>
          <span
            className={
              selected.length === 0 ? styles.placeholder : styles.displayText
            }>
            {selected.length > 0
              ? options
                  .filter((option) => selected.includes(option.id))
                  .map((option) => option.name)
                  .join(', ')
              : placeholder}
          </span>
          <div className={styles.select_arrow}>
            <img
              src={IC_SELECT_ARROW_INPUT}
              alt='select_arrow_input'
              className={styles.select_arrow_img}
            />
          </div>
        </div>

        {isOpen && (
          <div className={styles.dropdown}>
            {options.map((option) => (
              <div key={option.id} className={styles.checkboxItem}>
                <label className={styles.checkboxLabel}>
                  <input
                    type='checkbox'
                    checked={selected.includes(option.id)}
                    onChange={() => handleCheckboxChange(option.id)}
                    className={styles.checkbox}
                  />
                  <span className={styles.optionName}>{option.name}</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
