import React from 'react'

const News = () => {
  return (
    <div>
    <section style={styles.section}>
      <div style={styles.content}>
        <div style={styles.welcomeText}>
          <h2 style={styles.heading}>News</h2>
          <ul style={{display:'grid', textAlign:'start', listStyleType:'none'}}>
            <li style={styles.list}>1. &nbsp;Dr Amit Thakkar Received Super Computer Grant from DST and GUJCOST for Development of various deep learning projects.</li>
            <li style={styles.list}>2. &nbsp;Dr Amit Thakkar Received Grant of Rs. 6, 36,000 from AICTE under MODROC for development of Computer Vision and Pattern Recognition Laboratory.</li>
            <li style={styles.list}>3. &nbsp;Dr Amit Thakkar Received grant of Rs. 5, 31,000 from AICTE under PRERANA Scheme for training centre of SC/ST Student for Higher Education.</li>
            <li style={styles.list}>4. &nbsp;Dr Amit Thakkar Received Grant of Rs. 1,75,000 from NVidia for Research work</li>
            <li style={styles.list}>5. &nbsp;Dr Amit Thakkar Received Grant of Rs. 40,000 from GUJCOST to Organize workshop on Deep Learning. received grant of rs.1  lakh for development of FISH </li>
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

export default News