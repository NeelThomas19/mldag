import React from 'react';

const WelcomeSection = () => {
  return (
    <section style={styles.section}>
      <div style={styles.content}>
        <div style={styles.welcomeText}>
          <h2 style={styles.heading}>Welcome to MLDAG</h2>
          <p>
            Welcome to the Machine Learning and Data Analytics Group (MLDAG). We are a small group of researchers
            with shared interests in machine learning and Data Analytics. We work on a variety of topics spanning
            theoretical foundations, algorithms, and applications tools.
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#f2f2f2',
    padding: '30px',
  },
  content: {
    maxWidth: '800px', // Limit the content width for better readability
    margin: '0 auto', // Center the content horizontally
  },
  welcomeText: {
    marginBottom: '20px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
};

export default WelcomeSection;
