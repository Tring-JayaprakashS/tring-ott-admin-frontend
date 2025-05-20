import Button from '../../../components/Button/Button';
import InformationPopup from '../../../components/Popups/InformationPopup/InformationPopup';
import { DeletePopupProps } from '../../../utlis/types/manageClientsType';
import styles from './DeleteSection.module.scss';

const DeleteSection = ({
  isVisible,
  onClose,
  icon,
  deletePermanent,
}: DeletePopupProps) => {
  const handleButtonClick = () => {
    deletePermanent();
  };

  let defaultTitle = 'Are you sure you want to proceed?';
  let defaultSubtitle =
    'This action will permanently delete the entire OTT platform and deactivate it across all app stores.';
  let defaultButtonText = 'Cancel';
  const displayTitle = defaultTitle;
  const displaySubtitle = defaultSubtitle;
  const displayButtonText = defaultButtonText;
  if (!isVisible) return null;

  return (
    <>
      <InformationPopup isVisible={isVisible} onClose={onClose}>
        <div>
          <div className={styles.modal_container_content_body}>
            <div className={styles.success_icon}>
              <img src={icon} alt='success_icon' />
            </div>
            <div className={styles.modal_container_content_body_message}>
              <p className={styles.modal_container_content_body_message_title}>
                {displayTitle}
              </p>
              {displaySubtitle && (
                <p
                  className={
                    styles.modal_container_content_body_message_subtitle
                  }>
                  {displaySubtitle}
                </p>
              )}
            </div>
            <div className={styles.button_wrapper}>
              <Button
                type='button'
                variant='transparent'
                onClick={handleButtonClick}>
                <p>Delete Permanently</p>
              </Button>
              <div className={styles.addUser_popup_submit}>
                <Button
                  fullWidth
                  type='button'
                  variant='primary'
                  onClick={onClose}>
                  {displayButtonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </InformationPopup>
    </>
  );
};

export default DeleteSection;
