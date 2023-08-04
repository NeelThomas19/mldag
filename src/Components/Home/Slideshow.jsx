import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const images = ['/rural_orig.jpg', '/urban_orig.jpg', '/workflow_orig.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={styles.carouselContainer}>
      <div style={styles.imageContainer}>
        <img
          src={images[currentImageIndex]}
          alt={`Carousel Item ${currentImageIndex + 1}`}
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  carouselContainer: {
    marginTop: '100px',
    width: '600px', // Increase the width of the carousel container
    height: '700px', // Increase the height of the carousel container
    maxWidth: '100%', // Set the maximum width of the carousel
    marginLeft: '20px', // Add a margin to separate it from the WelcomeSection
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center', // Center the image horizontally
    alignItems: 'center', // Center the image vertically
  },
  imageContainer: {
    padding: '10px',
    width: '100%', // Set the width of the container to 100% to make the image full-width
    height: '90%', // Adjust the height to your desired value
    display: 'flex',
    justifyContent: 'center', // Center the image horizontally
    alignItems: 'center', // Center the image vertically
  },
  image: {
    height: '100%', // Make the image take the full height of the container
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default Slideshow;
