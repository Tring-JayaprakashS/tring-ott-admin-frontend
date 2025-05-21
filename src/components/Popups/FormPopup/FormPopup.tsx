import React from 'react';
import { IC_CLOSE } from '../../../utlis/images';
import styles from './FormPopup.module.scss';
import Button from '../../Button/Button';
import { PopupProps } from '../../../utlis/types/formPopup';

const FormPopup = ({
  title,
  isVisible,
  onClose,
  children,
  formData,
  save,
  discard,
}: PopupProps) => {
  const addUser = (e: React.FormEvent) => {
    e.preventDefault();
    save(e);
    onClose();
  };

  const clearFormData = () => {
    discard();
  };

  if (!isVisible) return null;

  const isFormEmpty = () => {
    return Object.entries(formData).every(([key, value]) => {
      if (Array.isArray(value)) return value.length === 0;
      return value === '';
    });
  };

  return (
    <div className={styles.addUser_popup} onClick={onClose}>
      <div
        className={styles.addUser_popup_content}
        onClick={(e) => e.stopPropagation()}>
        <div className={styles.addUser_popup_header}>
          <h3 className={styles.addUser_popup_title}>{title}</h3>
          <div onClick={onClose} className={styles.addUser_popup_close}>
            <img
              src={IC_CLOSE}
              alt='Close'
              className={styles.addUser_popup_close_icon}
            />
          </div>
        </div>
        <form onSubmit={addUser} className={styles.addUser_popup_form}>
          {children}

          <div className={styles.addUser_popup_actions}>
            <Button
              type='button'
              variant='transparent'
              onClick={clearFormData}
              className={styles.addUser_popup_discard}>
              Discard
            </Button>
            <div>
              {isFormEmpty() ? (
                <Button
                  type='button'
                  variant='disable'
                  disabled={true}
                  className={styles.addUser_popup_disabled_button}>
                  Apply
                </Button>
              ) : (
                <div className={styles.addUser_popup_submit}>
                  <Button type='submit' fullWidth>
                    Apply
                  </Button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPopup;
