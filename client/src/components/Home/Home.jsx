import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { MdLocationOn, } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import {RiSurveyFill} from "react-icons/ri";
import Footer from "../Footer/Footer";
import Photo from "../Photo/Photo";

const Home = () => {
  return (
    <>
      <header>
        <img
          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_1280.png"
          alt="Mypic image"
          width="200px"
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
            <Link to ={"https://bidyasagarresume.tiiny.site/"} target="_blank" ><RiSurveyFill/></Link>
            
          </div>
        </div>
      </header>

      <div className="container">
        <h1 style={{textAlign:'center', fontSize:'60px'}}>I code 🧑‍💻</h1>
        <div className="about-container">
          <p>
            <p>
              
              Hey there! Welcome to my corner,
            </p>
            <p >
       
       I am a student residing in Guwahati, pursuing B.tech in Electronics and Communication Engineering from Assam Engineering College,Guwahati. <br />
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
         collaborate to turn your ideas into reality 💻🌐🚀.
     </p>

            
          </p>
        </div>
      </div>

      <div className="container-exp">
        <h2>Explore more</h2>
        <Link to='/photo' ><button>Photo gallary</button></Link>
        <Link to='/blogs' ><button>Blogs</button></Link>
        <Link to='/random' ><button>Random</button></Link>
        <Link to ={"https://bidyasagar.netlify.app/"} ><button style={{color:'white',cursor:'pointer' }}>Click 🎁</button></Link>
        
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
