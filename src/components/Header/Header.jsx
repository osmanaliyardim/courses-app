import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import styles from '../Header/Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../../store';

const Header = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.courses.user.name);

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
              onClick={() => {
                localStorage.removeItem('userToken');
                dispatch(saveUser([false, '', '', '']));
              }}
            />
          </Link>
        </div>
      </header>
    );
};

export default Header;
