import React from 'react';

const DataScienceChallenges = () => {
  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Data Science Challenges</h3>
      <p style={{display:'grid', textAlign:'start', fontWeight: '600'}}>The challenge is a unique opportunity for you to put your coding and machine learning skills to test. You will get to solve a real-world data science problem and also get a sneak peek into the kind of problem statements being solved by ZS’s Advanced Data Science team. The offered problem statement is designed to evaluate:</p>
      <ol style={styles.challenges}>
        <li style={styles.list}>your knowledge of machine learning, optimization and statistics</li>
        <li style={styles.list}>your proficiency in identifying the right technique to approach the solution</li>
        <li style={styles.list}>the way you translate the findings from a business context</li>
        <li style={styles.list}>Online Phase (July 19-22, 2019)</li>
        <li style={styles.list}>Offline Data-A-Thon(August 2-3, 2019)</li>
      </ol>
    </div>
  );
};

const styles = {
  container: {
    flex: '1',
    padding: '20px',
    backgroundColor: '#f2f2f2',
  },
  heading: {
    fontWeight: 'bold',
  },
  challenges: {
    listStyleType: 'decimal',
    paddingLeft: '20px',
    display:'grid',
    textAlign:'start',
    // fontSize:'20px',
    fontWeight: '600',
  },
  list:{
    padding:'10px',
  },
};

export default DataScienceChallenges;
