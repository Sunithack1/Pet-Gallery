import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classNames';

const ImageToggleOnScroll = ({ primaryImg, dogsGallery, catsGallery, imageName }) => {
  const imageRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [dogsGallery, catsGallery]);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return (
    <img
      src={
        isLoading
          ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
          : primaryImg
      }
      alt={imageName}
      ref={imageRef}
      width="200"
      height="200"
      className={classnames('pet-image', {'black-and-white':!inView})}
    />
  );
};

export default ImageToggleOnScroll;
