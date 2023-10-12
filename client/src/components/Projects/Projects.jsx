import React, { useState } from 'react';
import './Projects.css'; // Import your CSS file
import Footer from '../Footer/Footer';

const projects = [
  {
    id: 1,
    title: 'Prestoclean.in',
    description: 'This is a full-stack laundry service web application. I have designed some part of the frontend of this website',
    webLink: 'https://prestoclean.netlify.app', 
    githubLink: 'https://github.com/DevDreamer26/', 
  },
  {
    id: 2,
    title: 'GigCrafters',
    description: 'This is my freelancing site.',
    webLink: 'https://gigcrafters.netlify.app',
    githubLink: 'https://github.com/DevDreamer26/FroductiveNew',
  },
  {
    id: 3,
    title: 'Black-Jack',
    description: 'It is a simple game with basic javascript',
    webLink: '#',
    githubLink: 'https://github.com/DevDreamer26/Blackjack',
  },
  {
    id: 4,
    title: 'Tab-Tracker',
    description: 'Chrome extension to save the current tab.It can store previous links also.',
    webLink: '#',
    githubLink: 'https://github.com/DevDreamer26/Tab-Tracker',
  },
  {
    id: 5,
    title: 'SHYAM INDUSTRY',
    description: 'I  have developed the website of SHYAM INDUSTRY, A business website',
    webLink: 'https://shyamindustry.netlify.app/',
    githubLink: 'https://github.com/DevDreamer26/',
  },
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const goToPreviousProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projects.length - 1));
  };

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : 0));
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <>
    <div className="projects-container">
      <h1>Projects</h1>
      
      <div className="project-card">
        <h2>{currentProject.title}</h2>
        <div className="project-links">
          <a href={currentProject.webLink} target="_blank" rel="noopener noreferrer">
            Web Link
          </a>
          <a href={currentProject.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
        <p>{currentProject.description}</p>
        
      </div>
      <div className="navigation-buttons">
        <button onClick={goToPreviousProject}>Previous</button>
        <button onClick={goToNextProject}>Next</button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Projects;
