import React from 'react';
import WelcomeSection from './WelcomeSection';
import RecentPublications from './RecentPublications';
import DataScienceChallenges from './DataScienceChallenges';
import Slideshow from './Slideshow';
import LandscapeImage from './LandscapeImage';
import ProjectOpenings from './ProjectOpenings';
import UpcomingEvents from './UpcomingEvents';
import News from './News';
import { useNavigate } from "react-router-dom";
import './Home.css';

function Home() {

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="navbar">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container" style={{ display: "flex", justifyContent: "flex-start" }}>
          <button onClick={() => handleNavigate("/")} className="navbar-brand" style={{ display: "flex", textDecoration: "none", width: "100%", border: "none", background: "transparent", cursor: "pointer" }}>
            <img src="mldag.png" alt="mdalg" style={{ height: "100px", marginRight: "0px"}} />
            <div style={{ textAlign: "left" }}>
              <span style={{ fontSize: "29px", fontWeight: "bold" }}>MLDAG - CHARUSAT</span>
              <br />
              <span style={{ fontSize: "20px" }}>Machine Learning and Data Analytics Group</span>
            </div>
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav" style={{fontWeight:'bold'}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <button onClick={() => handleNavigate("/")} className="nav-link" style={{ border: "none", background: "transparent", cursor: "pointer" }}>
                  Home
                </button>
              </li>
              <li className="nav-item dropdown">
                <button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  People
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button onClick={() => handleNavigate("/ourteam")} className="dropdown-item" style={{ border: "none", background: "transparent", cursor: "pointer" }}>
                      Our Team
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNavigate("/students")} className="dropdown-item" style={{ border: "none", background: "transparent", cursor: "pointer" }}>
                      Students
                    </button>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Research
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button onClick={() => handleNavigate("/publication")} className="dropdown-item" style={{ border: "none", background: "transparent", cursor: "pointer" }}>
                      Publication
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNavigate("/project")} className="dropdown-item" style={{ border: "none", background: "transparent", cursor: "pointer" }}>
                      Project
                    </button>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Resources
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button onClick={() => handleNavigate("/material")} className="dropdown-item" style={{ border: "none", background: "transparent", cursor: "pointer" }}>
                      Material
                    </button>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contact
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" type="button">
                      CSE1
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      CSE2
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
      <div style={styles.container}>
        <div style={styles.leftSection}>
          <WelcomeSection />
          <div style={styles.recentAndChallenges}>
            <RecentPublications />
            <DataScienceChallenges />
          </div>
        </div>
        <div style={styles.rightSection}>
          <Slideshow />
        </div>
      </div>
      <div className="row">
        <div className="col-5" style={styles.project}><ProjectOpenings /></div>
        <div className="col-5">
        <div className="row">
        <div className="col-5" style={styles.upcoming}><UpcomingEvents /></div>
        </div>
        <div className="row">
        <div className="col-5" style={styles.news}><News /></div>
        </div>
        </div>
      </div>
      <LandscapeImage />
      <footer className='footer'>
      Copyright © 2023 MLDAG - CHARUSAT
      </footer>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  leftSection: {
    flex: 2,
    padding: '20px',
    minWidth: '400px',
    maxWidth: '800px',
    width: '50%',
    boxSizing: 'border-box',
  },
  rightSection: {
    flex: 1,
    padding: '20px',
    minWidth: '400px',
    maxWidth: '800px',
    width: '50%',
    boxSizing: 'border-box',
  },
  recentAndChallenges: {
    display: 'flex',
    marginTop: '20px',
  },
  project: {
    flex: 2,
    padding: '20px',
    minWidth: '400px',
    maxWidth: '800px',
    width: '50%',
    boxSizing: 'border-box',
  },
  upcoming: {
    flex: 2,
    padding: '20px',
    minWidth: '400px',
    maxWidth: '800px',
    width: '50%',
    boxSizing: 'border-box',
  },
  news: {
    flex: 2,
    padding: '20px',
    minWidth: '400px',
    maxWidth: '800px',
    width: '50%',
    boxSizing: 'border-box',
  },
};

export default Home;
