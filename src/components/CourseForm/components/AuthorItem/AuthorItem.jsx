import React from 'react';
import Button from '../../../../common/Button/Button';
import styles from './AuthorItem.module.css';

const AuthorItem = ({ authorName, btnText, btnOnClick, btnType }) => {
  return (
    <div className={styles.authorItem}>
      <p>{authorName}</p>
      <Button buttonText={btnText} onClick={btnOnClick} btnType={btnType} />
    </div>
  );
};

export default AuthorItem;
