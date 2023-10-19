import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { MdLocationOn, } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
// import {DiCodeBadge} from "react-icons/di"
// import {RiSurveyFill} from "react-icons/ri";
import Footer from "../Footer/Footer";
import resume from '../../assets/resume.png'
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
          <h4>Freelance web developer</h4>
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
            <Link to ={"https://bidyasagarresume.tiiny.site/"} target="_blank" ><img src={resume} alt="Resume" style={{borderRadius:'0px',width:'50px'}} /></Link>
            
          </div>
        </div>
      </header>

      <div className="container">
        <div className="about-container">
          <p>
            <h1>
              Hey there! <br /> Welcome to my corner,
            </h1>
            <div className="intro-text">
            <p >
            I am an independent Web Developer with expertise in the MERN stack. If you are seeking additional customization for your website or require professional initial setup, I am well-equipped for the task. Over the past year, I have been dedicated to creating websites tailored to businesses of various sizes. Regardless of the project's scale, I specialize in providing consulting services to help you establish and design your website. Subsequently, I offer comprehensive training and facilitate a smooth handover, empowering you to manage your site with minimal ongoing support. Furthermore, I am available for recurring maintenance tasks to keep your website up-to-date, and I also offer personalized one-on-one training sessions for your convenience.
     </p>
            </div>
         
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
        <Link to ={"https://wa.me/918822009123"} ><button style={{color:'black',cursor:'pointer',background :'#0ba6ff', border:'1px solid black' }}>Let's talk </button></Link>
        <Link to ={"https://bidyasagar.netlify.app/"} ><button style={{color:'black',cursor:'pointer',background :'transparent', border:'1px solid black' }}>⚙️.old</button></Link>
        
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
