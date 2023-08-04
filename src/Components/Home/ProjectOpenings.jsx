import React from 'react'

const ProjectOpenings = () => {
  return (
    <div>
    <section style={styles.section}>
      <div style={styles.content}>
        <div style={styles.welcomeText}>
          <h2 style={styles.heading}>Project Openings</h2>
          <ul style={{display:'grid', textAlign:'start'}}>
            <li style={styles.list}>1. &nbsp;Face Expression Detection (Sentiment Analysis on video) </li>
            <li style={styles.list}>2. &nbsp;Under Water Robot (Robot Fish) </li>
            <li style={styles.list}>3. &nbsp;Smart Cradle </li>
            <li style={styles.list}>4. &nbsp;Exercise Monitoring for physiotherapy videos </li>
            <li style={styles.list}>5. &nbsp;Credit Card Fraud Detection (Anomaly Detection) </li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}

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
    list:{
      listStyle:'none',
      padding:'10px',
    },
  };

export default ProjectOpenings