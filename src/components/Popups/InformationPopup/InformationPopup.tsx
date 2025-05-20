import styles from './InformationPopup.module.scss';
import { IC_CLOSE } from '../../../utlis/images';
import { InformationProps } from '../../../utlis/types/formPopup';

const InformationPopup = ({
  onClose,
  title,
  isVisible,
  children,
}: InformationProps) => {
  const clearFormData = () => {
    onClose();
  };

  if (!isVisible) return null;
  return (
    <div className={styles.addUser_popup} onClick={clearFormData}>
      <div
        className={styles.addUser_popup_content}
        onClick={(e) => e.stopPropagation()}>
        <div className={styles.addUser_popup_header}>
          {title ? (
            <h3 className={styles.addUser_popup_title}>{title}</h3>
          ) : (
            <h3></h3>
          )}
          <div onClick={clearFormData} className={styles.addUser_popup_close}>
            <img
              src={IC_CLOSE}
              alt='Close'
              className={styles.addUser_popup_close_icon}
            />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default InformationPopup;
