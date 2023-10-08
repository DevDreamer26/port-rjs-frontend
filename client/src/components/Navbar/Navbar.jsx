import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" onClick={toggleMenu}>
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
