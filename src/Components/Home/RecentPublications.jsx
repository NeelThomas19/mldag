import React from 'react';

const RecentPublications = () => {
  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Recent Publications</h3>
      <ol style={styles.publications}>
        <li>
          <p style={{display:'grid', textAlign:'start', fontWeight: '600'}}><em>01.&nbsp; jalpesh harkishanbhai vasa , modi panthini nayankumar Review Of Different Privacy Preserving Techniques In PPDP International Journal Of Engineering Trends And Technology - IJETT 59(5):223-227, 2019</em></p>
        </li>
        <li>
          <p style={{display:'grid', textAlign:'start', fontWeight: '600'}}><em>02.&nbsp; chovatiya foram naranbhai , purvi harishkumar prajapati , jalpesh harkishanbhai vasa , patel jay rameshbhai A Research Direction On Data Mining With IOT Smart Innovation, Systems And Technologies Book Series (SIST, Volume 83), 2019</em></p>
        </li>
        <li>
          <p style={{display:'grid', textAlign:'start', fontWeight: '600'}}><em>03.&nbsp; chhugani sagar dilipbhai , sanketkumar bharatbhai suthar Development Of WebGIS Based Information System: A Case Study Of Energy Sector Journal Of Geomatics 12(1):63-68, 2019</em></p>
        </li>
        <li>
          <p style={{display:'grid', textAlign:'start', fontWeight: '600'}}><em>04.&nbsp; khatri chandni suryakant , dr. sunil jardosh, mrudang daxeshkumar pandya , Deep Learning Approaches For Protein Structure Prediction International Journal Of Engineering & Technology Uae 7(5):168-170, 2019</em></p>
        </li>
      </ol>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#f2f2f2',
    marginRight: '10px',
  },
  heading: {
    fontWeight: 'bold',
  },
  publications: {
    marginTop: '16px',
    paddingLeft: '20px',
    listStyleType:'none',
    fontWeight: 'bolder',
  },
};

export default RecentPublications;
