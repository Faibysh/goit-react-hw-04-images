import React, { useState } from 'react';
import SearchBar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

function App() {
  const [imageName, setImageName] = useState('');

  const handleFormSubmit = async name => {
    setImageName(name);
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageGallery imageName={imageName} />
    </>
  );
}

export default App;
