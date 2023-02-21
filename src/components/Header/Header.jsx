import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import styles from '../Header/Header.module.css';

const Header = () => {
  let location = useLocation();
  let username = localStorage.getItem('username');

  if (location.pathname === '/register') {
    return (
      <header className={styles.header}>
        <Logo />
      </header>
    );
  } else if (location.pathname === '/login') {
    return (
      <header className={styles.header}>
        <Logo />
      </header>
    );
  } else
    return (
      <header className={styles.header}>
        <Logo />
        <div className={styles.headerBody}>
          <h2>{username}</h2>
          <Link to={'/login'}>
            <Button
              buttonText='Logout'
              onClick={() => localStorage.removeItem('userToken')}
            />
          </Link>
        </div>
      </header>
    );
};

export default Header;
