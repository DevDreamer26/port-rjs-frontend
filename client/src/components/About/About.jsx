
import React from 'react';
import './About.css'; 
import Footer from '../Footer/Footer';
import pic from '../../assets/mypic.png'

const AboutMe = () => {
  return (
    <>
    <div className="about-me-card">
    <img src={pic} alt="mypic"  />
      <h1>Hello!<br />
       I'm Bidyasagar Hazarika. 
      </h1>
     
      
      <p style={{fontSize:'20px',textAlign:'justify'}}>
              I'm on a
              mission to turn caffeine into code and dreams into websites. When
              I'm not wrangling lines of code, you can find me engaged in epic
              battles with semicolons and enjoying heated debates about tabs vs.
              spaces (obviously, spaces are superior). <br />
              My coding superpowers include taming wild APIs, conjuring up
              responsive designs, and making websites load faster than you can
              say 'Is it done yet?' So, whether you're here to check out my
              latest projects or to see if I've secretly hidden any easter eggs
              in this portfolio, I'm thrilled to have you on board!
              <br />
              Feel free to browse, click around, and if you encounter any bugs,
              just know that they're part of my plan to keep life interesting.
              Thanks for stopping by, and remember, behind every great developer
              is a coffee machine working overtime! ☕💻
              <br />
            </p>
        
      <div className='skills'>
        <h1>My skills</h1>
        <ul>
        <li>I can build full-stack applications (MERN) </li>
      </ul>
      </div>
      
      <div className='edu-list'>
      <h1>Educational journey</h1>
      
      <ul>

        <li>B.tech in Electronics and Communication Engineering from Assam Engineering College (2022-2026)</li>
      <li>Higher Secondary - Ramanujan Junior College (2019-2021)</li>
      <li>Schooling - S.S.V.N -Golaghat  (2009-2019)</li>
      </ul>
      </div>
      {/* <div className='achievement'>
        <h1>My Achievement</h1>
        
      
      </div> */}
      <div className="position">
        <h1>Position of Responsibility</h1>
        <p>
          Involvement in clubs
          <ul><li>Technical Coordinator  GDSC-AEC</li>
          <li>Web wing moderator at AEC CODING CLUB</li>
          <li>Technical Coordinator at AEC QUIZ CLUB</li>
          <li>Technical Coordinator(Software) at Robotics Club AEC</li>
          </ul>

        </p>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default AboutMe;
