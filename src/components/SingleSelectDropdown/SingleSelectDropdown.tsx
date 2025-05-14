import { useRef } from 'react';
import { IC_DROP_DOWN } from '../../utlis/images';
import styles from './SingleSelectDropdown.module.scss';
import useClickOutside from '../../hooks/useClickOutside';

export type Project = { id: string; name: string };
type SingleSelectDropdownProps = {
  label?: string;
  placeholder?: string;
  selected: Project | null;
  options: Project[];
  onSelect: (project: Project) => void;
  isOpen: boolean;
  toggleDropdown: () => void;
  clickOutside: () => void;
};

export const SingleSelectDropdown = ({
  label,
  placeholder,
  selected,
  options,
  onSelect,
  isOpen,
  clickOutside,
  toggleDropdown,
}: SingleSelectDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(dropdownRef, () => {
    clickOutside();
  });
  return (
    <div className={styles.dropdown_wrap}>
      {label && <label className={styles.dropdown_label}>{label}</label>}
      <div className={styles.dropdown_relative} ref={dropdownRef}>
        <div className={styles.dropdown_trigger} onClick={toggleDropdown}>
          <span
            className={
              selected ? styles.dropdown_selected : styles.dropdown_placeholder
            }>
            {selected ? selected.name : placeholder}
          </span>
          <img
            src={IC_DROP_DOWN}
            alt='Dropdown Icon'
            className={styles.dropdown_Icon}
          />
        </div>

        {isOpen && (
          <div className={styles.dropdown_options}>
            {options.map((project) => (
              <div
                key={project.id}
                className={styles.dropdown_option}
                onClick={() => onSelect(project)}>
                {project.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
