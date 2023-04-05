import React from 'react';
import styles from './Button.module.css';

const Button = ({ onLoadMore }) => {
  const handleButtonClick = () => {
    onLoadMore();
  };

  return (
    <button className={styles.more} onClick={handleButtonClick}>
      Load more
    </button>
  );
};

export default Button;
