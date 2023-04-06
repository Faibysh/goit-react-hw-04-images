import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import Button from 'components/Button';
import React, { useState, useEffect } from 'react';
import { PER_PAGE, getImages } from 'services/api/api';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ imageName }) => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    if (!imageName.length) return;
    setPage(1);
    const fetchImages = async () => {
      setStatus('pending');
      try {
        await getImages(imageName, 1).then(response => {
          setImages(response.hits);
          setIsButtonVisible(
            response.hits.length && response.totalHits >= PER_PAGE * 1
          );
        });
        setStatus('resolved');
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      }
    };
    fetchImages();
  }, [imageName]);

  const loadMore = async () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (!imageName.length || page === 1) return;
    const fetchImages = async () => {
      try {
        await getImages(imageName, page).then(response => {
          setImages(prevImages => [...prevImages, ...response.hits]);
          setIsButtonVisible(
            response.hits.length && response.totalHits >= PER_PAGE * page
          );
        });
        setStatus('resolved');
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      }
    };
    fetchImages();
  }, [page]);

  return (
    <>
      {status === 'rejected' && <div>{error}</div>}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <>
          <ul className={styles.gallery}>
            {images.length ? (
              images.map(image => (
                <ImageGalleryItem key={image.id} image={image} />
              ))
            ) : (
              <div>You don't have any photos</div>
            )}
          </ul>
          {isButtonVisible && <Button onLoadMore={loadMore} />}
        </>
      )}
    </>
  );
};

export default ImageGallery;
