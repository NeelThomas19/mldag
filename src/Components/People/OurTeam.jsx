import React from 'react';
import { useNavigate } from 'react-router';

const OurTeam = () => {

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
        <div className="row" style={{marginTop:'40px',fontWeight:'bolder'}}>
          <div className="col-12">
          <h1>About</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6" style={{display:'grid', textAlign:'start', marginLeft:'400px', marginTop:'20px',boxSizing:'border-box', boxShadow:'10px 10px rgba(0,0,0,0.3)', border:'2px solid black', fontWeight:'bold',fontSize:'18px',background:'grey',color:'white'}}>
          <h5>We are a part of the Department of Information Technology at CHARUSAT University located at Changa, Gujarat, India. We are interested in research aspects of machine learning, Semantic Web, Linked Data, Big Data Analytics and Deep Learning. Particular strengths of the group are in Xtreme Label Classification, Recommendation System, Ontology Mining, Stream Mining and Privacy in Big Data. We work in application domains like Healthcare, Social Network and Online Shopping. We actively seek to collaborate with other groups around the world.</h5>
          </div>
        </div>
        <div className="row" style={{marginTop:'40px',fontWeight:'bolder'}}>
          <div className="col-6">
            <h1>Estabished in 2017</h1>
            <p style={{display:'grid', textAlign:'start', marginTop:'20px',boxSizing:'border-box', fontWeight:'bold',fontSize:'18px',width:'60%',marginLeft:'150px'}}>Dr. Amit Thakkar has completed his PHD in 2016 and taken the initiative to start the machine learning group and data analytics group with five research scholar under his guidance.</p>
          </div>
          <div className="col-6">
            <h1>Our Goal</h1>
            <p style={{display:'grid', textAlign:'start', marginTop:'20px',boxSizing:'border-box', fontWeight:'bold',fontSize:'18px',width:'80%',marginLeft:'100px'}}>We are a group of Machine Learning and Data Science enthusiasts. We meet to discuss research papers and have featured talks by experts in industry and academia. The purpose is to build a community around students, researchers, corporations in Machine Learning and Data Science.</p>
          </div>
        </div>
        <footer className='footer'>
      Copyright © 2023 MLDAG - CHARUSAT
      </footer>
    </div>
  )
}

export default OurTeam