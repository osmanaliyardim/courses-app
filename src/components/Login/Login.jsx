import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Login/Login.module.css';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

const Login = () => {
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:4000/login', {
        name: event.target.elements.name.value,
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
      })
      .then((response) => {
        localStorage['username'] = response.data.user.name;
        localStorage['userToken'] = response.data.result;
        navigate('/courses');
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        console.log(error.message);
        console.log(error.request);
      });
  };

  return (
    <form onSubmit={login}>
      <div className={styles.loginForm}>
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
        <Button buttonText={'Login'} />
        <div>
          Don't you have an account?{' '}
          <Link className={styles.registerLink} to={`/register`}>
            Register
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
