import React from 'react';
import './Projects.css'
import Footer from '../Footer/Footer'

// Importing images here 
import presto from '../../assets/presto.png'
import gig from '../../assets/gig.png'
import shyam from '../../assets/shyam.png'
import tab from "../../assets/tab.png"
import demo from "../../assets/demo.png"
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'PRESTOCLEAN',
      description: 'Full stack Laundry service web application',
      imageUrl: presto,
      githubLink: 'https://github.com/DevDreamer26/',
      webLink: 'https://prestoclean.netlify.app/',
    },
    {
      id: 2,
      title: 'GigCrafters',
      description: 'This is my freelancing site',
      imageUrl: gig,
      githubLink: 'https://github.com/DevDreamer26/',
      webLink: 'https://gigcrafters.netlify.app',
    },
    {
      id: 3,
      title: 'SHYAM INDUSTRY',
      description: 'A business website for a industry',
      imageUrl: shyam,
      githubLink: 'https://github.com/DevDreamer26/',
      webLink: 'https://shyamindustry.netlify.app',
    },
    {
      id: 4,
      title: 'Tab-Tracker',
      description: 'A chrome extension to save tabs.(JS)',
      imageUrl: tab,
      githubLink: 'https://github.com/DevDreamer26/Tab-Tracker',
      webLink:'https://github.com/DevDreamer26/Tab-Tracker'
    },
    // {
    //   id: 5,
    //   title: 'ROBOTICS-CLUB-AEC',
    //   description: 'Official robotics club website of Assam Engineering College',
    //   imageUrl: demo,
    //   githubLink: 'https://github.com/DevDreamer26/',
    //   webLink: 'https://github.com/DevDreamer26/',
    // },
    // {
    //   id: 6,
    //   title: 'QUIZ-CLUB-AEC',
    //   description: 'Official quiz club website of Assam Engineering College',
    //   imageUrl: demo,
    //   githubLink: 'https://github.com/DevDreamer26/',
    //   webLink: 'https://github.com/DevDreamer26/',
    // },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <button className="github-button">GitHub Repo</button>
              </a>
              <a href={project.webLink} target="_blank" rel="noopener noreferrer">
                <button className="web-button">Web Link</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Projects;
