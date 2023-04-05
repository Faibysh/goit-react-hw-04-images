import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(prevState => !prevState);
  };

  return (
    <>
      <li className={styles['gallery-item']}>
        <div className="image-container">
          <img
            src={image.webformatURL}
            alt={image.tags}
            onClick={() => toggleModal()}
          />
        </div>
      </li>
      {isModalVisible && (
        <Modal
          onClose={toggleModal}
          children={<img src={image.largeImageURL} alt={image.tags} />}
        />
      )}
    </>
  );
};
export default ImageGalleryItem;
