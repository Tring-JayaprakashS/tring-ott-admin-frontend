import React from 'react';
import Styles from './ResetPasswordModal.module.scss';
import Button from '../Button/Button';
import { IC_SUCCESS_MESSAGE, IC_CLOSE_ICON } from '../../utlis/images';
import { useNavigate } from 'react-router-dom';

interface ResetPasswordProps {
  email?: string;
  modalType?: 'resetLink' | 'passwordChanged';
  title?: string;
  subtitle?: string;
  buttonText?: string;
  icon?: string;
  height?: string;
  onClose: () => void;
  redirecPath?: string;
  color?: string;
}

const ResetPasswordModal: React.FC<ResetPasswordProps> = ({
  onClose,
  modalType = 'resetLink',
  email = '',
  title,
  subtitle,
  buttonText,
  icon = IC_SUCCESS_MESSAGE,
  height = '266px',
  color = '',
  redirecPath = '/sigin',
}) => {
  const navigate = useNavigate();
  let defaultTitle = '';
  let defaultSubtitle = '';
  let defaultButtonText = 'Okay';
  if (modalType === 'resetLink') {
    defaultTitle = 'We have sent a password reset link to your email';
    defaultButtonText = 'Okay';
  } else if (modalType === 'passwordChanged') {
    defaultTitle = 'Password changed successfully!';
    defaultSubtitle =
      'Your password has been updated.Please sign in to continue.';
    defaultButtonText = 'Sign In';
  }

  const displayTitle = title || defaultTitle;
  const displaySubtitle = subtitle || defaultSubtitle;
  const displayButtonText = buttonText || defaultButtonText;
  const handleButtonClick = () => {
    if (modalType === 'passwordChanged') {
      navigate(redirecPath);
    } else {
      onClose();
    }
  };

  const modalStyle = {
    height: height,
  };
  const parastyle = {
    color: color,
  };
  return (
    <div className={Styles.modal_container}>
      <div className={Styles.modal_container_content} style={modalStyle}>
        <div className={Styles.modal_container_content_close} onClick={onClose}>
          <img src={IC_CLOSE_ICON} alt='close_icon' />
        </div>
        <div className={Styles.modal_container_content_body}>
          <div className={Styles.success_icon}>
            <img src={icon} alt='success_icon' />
          </div>
          <div className={Styles.modal_container_content_body_message}>
            <p
              className={Styles.modal_container_content_body_message_title}
              style={parastyle}>
              {displayTitle} <span className={Styles.email}>{email}</span>
            </p>
            {displaySubtitle && (
              <p
                className={
                  Styles.modal_container_content_body_message_subtitle
                }>
                {displaySubtitle}
              </p>
            )}
          </div>
          <Button
            type='button'
            variant='primary'
            className={Styles.modal_container_button}
            onClick={handleButtonClick}>
            {displayButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
