import React from 'react'

const UpcomingEvents = () => {
  return (
    <div>
    <section style={styles.section}>
      <div style={styles.content}>
        <div style={styles.welcomeText}>
          <h2 style={styles.heading}>Upcoming Events</h2>
          <ul style={{display:'grid', textAlign:'start', listStyleType:'none'}}>
            <li>1. &nbsp;Workshop on Microsoft Power BI. (Only for founding member.)</li>
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
  };

export default UpcomingEvents