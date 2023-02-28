import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Registration.module.css';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

const Registration = () => {
  const registerEndpoint = 'http://localhost:4000/register';

  const submitRegister = async (event) => {
    event.preventDefault();
    const res = await axios.post(registerEndpoint, {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    });
    const data = await res.data;
  };

  return (
    <form onSubmit={submitRegister}>
      <div className={styles.registrationForm}>
        <Input
          labelText={'Name'}
          placeholderText={'Enter your name..'}
          inputName={'name'}
        />
        <Input
          labelText={'Email'}
          placeholderText={'Enter your email..'}
          inputName={'email'}
        />
        <Input
          labelText={'Password'}
          placeholderText={'Enter your password..'}
          inputName={'password'}
        />
        <Button buttonText={'Register'} />
        <div>
          Already have an account?{' '}
          <Link className={styles.loginLink} to={`/login`}>
            Login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Registration;
