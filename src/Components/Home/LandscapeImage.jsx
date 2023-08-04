import React from 'react';

const LandscapeImage = () => {
  return (
    <div style={styles.container}>
      <img
        src="Landscape.png"
        alt="Landscape"
        style={styles.image}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh', // You can adjust the height to your preference
    backgroundColor: '#f2f2f2', // Add a background color for aesthetic layout
  },
  image: {
    maxWidth: '60%', // You can adjust the width to make it smaller
    height: 'auto',
    borderRadius: '10px', // Add a border radius for aesthetic layout
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow for depth
  },
};

export default LandscapeImage;
