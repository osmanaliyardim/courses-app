import React from 'react';
import styles from './Input.module.css';

const Input = ({
  labelText,
  placeholderText,
  inputType,
  inputValue,
  inputName,
  onChange,
  isRequired,
  minLength,
}) => {
  return (
    <div className={styles.customComponent}>
      {labelText && (
        <label className={styles.label} htmlFor='input'>
          {labelText}
        </label>
      )}

      <input
        className={styles.customInput}
        id='input'
        type={inputType}
        name={inputName}
        placeholder={placeholderText}
        value={inputValue}
        onChange={onChange}
        required={isRequired}
        minLength={minLength}
      />
    </div>
  );
};

export default Input;
