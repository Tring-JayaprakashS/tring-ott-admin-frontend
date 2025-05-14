import React, { useState } from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../../../firebase/firebase';
import Styles from './SignIn.module.scss';
import { IC_SIGNIN_LOGO } from '../../../utlis/images';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('');
    if (!email) {
      setError('Please enter you email!');
      return;
    }
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!password) {
      setError('Please enter your password!');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className={Styles.signin_container_card}>
      <div className={Styles.signin_container_card_logo}>
        <img src={IC_SIGNIN_LOGO} alt='App Logo' />
        <p className={Styles.signin_container_card_logo_text}>
          Powered by Tring play
        </p>
      </div>
      <h1 className={Styles.signin_container_card_header}>Sign In</h1>
      <p className={Styles.signin_container_card_subhead}>
        Real time data meets OTT customization
      </p>
      {error && <p className={Styles.error_message}>{error}</p>}
      <form className={Styles.signin_container_form} onSubmit={handleSubmit}>
        <Input
          label='Email'
          type='email'
          name='email'
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={Styles.input_field}
        />
        <Input
          label='Password'
          type='password'
          name='password'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showToogle={true}
        />
        <div className={Styles.forgot_password}>
          <Link to='/forgetPassword' className={Styles.forgot_password_link}>
            Forgot password?
          </Link>
        </div>
        <Button type='submit' variant='primary' fullWidth>
          Sign In
        </Button>
        <div className={Styles.account_link}>
          Don't have an account?{' '}
          <a
            href='https://mail.google.com/mail/?view=cm&to=hello@tringplay.com'
            target='_blank'>
            Contact Tringplay
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
