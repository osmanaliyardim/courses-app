import React from 'react';
import styles from './Input.module.css';

const Input = ({
  labelText,
  placeholderText,
  inputType,
  inputValue,
  inputName,
  onChange,
  isRequired = true,
  minLength,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default Input;
