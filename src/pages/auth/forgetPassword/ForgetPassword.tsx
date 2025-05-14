import React, { useState } from 'react';
import Styles from './ForgetPassword.module.scss';
import { IC_SIGNIN_LOGO } from '../../../utlis/images';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useAUth } from '../../../context/Authcontext';
import ResetPasswordModal from '../../../components/resetPasswordModel/ResetPasswordModal';
import { fetchSignInMethodsForEmail, getAuth } from 'firebase/auth';

const ForgetPassword = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { resetPassword } = useAUth();
  const auth = getAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email adddress');
      return;
    }
    setMessage('');
    setError('');
    try {
      await resetPassword(email);
    } catch (error: any) {
      console.error(
        'Error sending password reset email.Please try again.',
        error.code,
        error.messageS
      );
    }
    setShowModal(true);
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
      <div className={Styles.signin_container_card_header_container}>
        <h1 className={Styles.signin_container_card_header}>Forgot Password</h1>
        <p className={Styles.signin_container_card_subhead}>
          Enter your email to reset your password securely
        </p>

        {error && <p className={Styles.error_message}>{error}</p>}
        {message && <p className={Styles.success_message}>{message}</p>}

        <form className={Styles.signin_container_form} onSubmit={handleSubmit}>
          <Input
            label='Email'
            type='email'
            name='email'
            placeholder='Enter email'
            value={email}
            className={Styles.signin_container_form_input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={Styles.button}>
            <Button type='submit' variant='primary' fullWidth>
              Reset Password
            </Button>
          </div>
          <div className={Styles.account_link}>
            Remember Your Password? <Link to='/signin'>Sign In</Link>
          </div>
        </form>
      </div>
      {showModal && <ResetPasswordModal email={email} onClose={closeModal} />}
    </div>
  );
};

export default ForgetPassword;
