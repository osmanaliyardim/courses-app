import React from 'react';
import styles from './Button.css';

const Button = ({ onClick, buttonText, btnType }) => {
  return (
    <button className={styles.customButton} onClick={onClick} type={btnType}>
      {buttonText}
    </button>
  );
};

export default Button;
