import React from 'react';
import logo from '../../../../assets/logo.jpg';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <img
      data-testid='logo'
      className={styles.logo}
      src={logo}
      alt='Courses App Logo'
    />
  );
};

export default Logo;
