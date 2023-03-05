import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Registration.module.css';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

const Registration = () => {
  const submitRegister = async ({ target: { elements } }, event) => {
    event.preventDefault();
    const res = await axios.post('http://localhost:4000/register', {
      name: elements.name.value,
      email: elements.email.value,
      password: elements.password.value,
    });
    const data = await res.data;
  };

  return (
    <form onSubmit={submitRegister}>
      <div className={styles.registrationForm}>
        <Input
          labelText='Name'
          placeholderText='Enter your name..'
          inputName='name'
        />
        <Input
          labelText='Email'
          placeholderText='Enter your email..'
          inputName='email'
        />
        <Input
          labelText='Password'
          placeholderText='Enter your password..'
          inputName='password'
        />
        <Button buttonText='Register' />
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
