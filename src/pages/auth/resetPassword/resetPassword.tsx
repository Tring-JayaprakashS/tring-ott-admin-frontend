import React, { useState } from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import { confirmPasswordReset, getAuth } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

import Styles from './resetPassword.module.scss';
import {
  IC_SIGNIN_LOGO,
  IMG_FRAME,
  IMG_SIGIN_ADMIN_BG,
} from '../../../utlis/images';
import ResetPasswordModal from '../../../components/resetPasswordModel/ResetPasswordModal';

const resetPassword = () => {
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const auth = getAuth();
  const [confirmPassword, setConfirmPassword] = useState('');

  const queryParams = new URLSearchParams(window.location.search);
  const oobCode = queryParams.get('oobCode');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('');
    if (!oobCode) {
      setError('Invalid oobCode');
      return;
    }
    if (!password) {
      setError('Please enter your password!');
      return;
    }
    if (!confirmPassword) {
      setError('Reenter password');
    }
    if (password !== confirmPassword) {
      setError('Password does not match');
    }

    try {
      await confirmPasswordReset(auth, oobCode, password);
      setShowModal(true);
    } catch (err: any) {
      setError(err.message || 'Reset password failed');
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setEmail('');
  };

  return (
    <div className={Styles.signin_container_card}>
      <div className={Styles.signin_container_card_logo}>
        <img src={IC_SIGNIN_LOGO} alt='App Logo' />
        <p className={Styles.signin_container_card_logo_text}>
          Powered by Tring play
        </p>
      </div>
      <h1 className={Styles.signin_container_card_header}>Reset Password</h1>
      <p className={Styles.signin_container_card_subhead}>
        Set a new Password to regain access
      </p>
      {error && <p className={Styles.error_message}>{error}</p>}
      {message && <p className={Styles.success_message}>{message}</p>}
      <form className={Styles.signin_container_form} onSubmit={handleSubmit}>
        <div className={Styles.input}>
          <Input
            label='New Password'
            type='password'
            name='New Password'
            placeholder='Enter new password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showToogle={true}
          />
        </div>
        <Input
          label='Confirm New Password'
          type='password'
          name='Confirm New password'
          placeholder='Confirm new password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          showToogle={true}
        />
        <Button type='submit' variant='primary' fullWidth>
          Submit
        </Button>
        <div className={Styles.account_link}>
          Remember Your Password? <Link to='/signin'>Sign In</Link>
        </div>
      </form>
      {showModal && (
        <ResetPasswordModal
          modalType='passwordChanged'
          email={email}
          onClose={closeModal}
          height='299px'
          color='#042036'
        />
      )}
    </div>
  );
};

export default resetPassword;
