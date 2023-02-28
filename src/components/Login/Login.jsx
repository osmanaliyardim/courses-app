import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Login/Login.module.css';
import { useDispatch } from 'react-redux';
import { saveUser } from '../../store';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginEndpoint = 'http://localhost:4000/login';

  const login = (event) => {
    event.preventDefault();

    axios
      .post(loginEndpoint, {
        name: event.target.elements.name.value,
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
      })
      .then(function (response) {
        dispatch(
          saveUser([
            true,
            response.data.user.name,
            response.data.user.email,
            response.data.result,
          ])
        );
        localStorage['username'] = response.data.user.name;
        localStorage['userToken'] = response.data.result;
        navigate('/courses');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <form action='' onSubmit={login}>
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
