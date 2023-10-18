import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { MdLocationOn, } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import {DiCodeBadge} from "react-icons/di"
// import {RiSurveyFill} from "react-icons/ri";
import Footer from "../Footer/Footer";
// import Photo from "../Photo/Photo";
// import pic from '../../assets/mypic.png'
import pic from '../../assets/toon.jpg'

import pic2 from '../../assets/coding.png'

const Home = () => {
  return (
    <>
      <header>
        <img
          src={pic}
          alt="Mypic image"
        />
        <div>
          <h1>Bidyasagar Hazarika</h1>
          <hr />
          <h4>
            <MdLocationOn /> Guwahati, India
          </h4>
          <div className="container-social">
            <Link to={"https://github.com/DevDreamer26"} target="_blank">
              <AiFillGithub  />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/bidyasagar22/"}
              target="_blank"
            >
              <BsLinkedin  />
              
            </Link>
            <Link to ={"https://bidyasagarresume.tiiny.site/"} target="_blank" ><DiCodeBadge/></Link>
            
          </div>
        </div>
      </header>

      <div className="container">
        <div className="about-container">
          <p>
            <h1>
              
              Hey there! <br /> Welcome to my corner,
            </h1>
            <p >
       
       I am a student residing in Guwahati, pursuing B.tech in Electronics and Communication Engineering from Assam Engineering College,Guwahati. 
       I've immersed myself
         in the world of web development, specializing in the MERN stack
         (MongoDB, Express.js, React, Node.js). This robust technology stack
         allows me to create dynamic and responsive web applications that not
         only meet but exceed expectations. Whether it's designing elegant user
         interfaces with React, optimizing server performance with Node.js, or
         seamlessly integrating data with MongoDB, I thrive on the challenges
         that the MERN stack presents. My commitment to clean, maintainable
         code ensures that your project will not only work flawlessly but also
         be easy to scale and maintain. I'm excited to leverage my expertise in
         the MERN stack to help bring your digital vision to life. Let's
         collaborate to turn your ideas into reality.
     </p>

            
          </p>
        </div>
      </div>
    <div className="new">
      <img src={pic2} alt="just" />
    </div>
      <div className="container-exp">
        {/* <h2>Explore more</h2> */}
        <Link to ='/projects'><button>Projects</button></Link>
        {/* <Link to='/photo' ><button>Gallary</button></Link> */}
        {/* <Link to='/blogs' ><button>Blogs</button></Link> */}
        {/* <Link to='/random' ><button>Random</button></Link> */}
        <Link to ={"https://bidyasagar.netlify.app/"} ><button style={{color:'black',cursor:'pointer',background :'transparent', border:'1px solid black' }}>⚙️.ach</button></Link>
        
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
