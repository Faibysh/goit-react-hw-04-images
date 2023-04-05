import React, { useState } from 'react';
import styles from './Searchbar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [imageName, setImageName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (imageName.trim().length) {
      onSubmit(imageName.trim());
      setImageName('');
    }
  };

  const onChangeImageName = e => {
    setImageName(e.target.value);
  };

  return (
    <header className="searchbar">
      <form className={styles['search-form']} onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={imageName}
          onChange={onChangeImageName}
        />
      </form>
    </header>
  );
};

export default SearchBar;
