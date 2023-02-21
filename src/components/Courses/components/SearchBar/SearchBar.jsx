import React from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import styles from './SearchBar.module.css';

const SearchBar = ({
  btnOnClick,
  inputLabelText,
  inputPlaceholderText,
  inputValue,
  onChange,
}) => {
  return (
    <div className={styles.searchBar}>
      <Input
        inputPlaceholderText={inputPlaceholderText}
        inputLabelText={inputLabelText}
        onChange={onChange}
        labelText={inputLabelText}
        inputValue={inputValue}
      />
      <Button buttonText={'Search'} onClick={btnOnClick} />
    </div>
  );
};

export default SearchBar;
