import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarD from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Photo from './components/Photo/Photo';
import Blogs from './components/Blogs/Blogs';
import Random from './components/Random/Random';

function App() {
  return (
    <BrowserRouter>
    <NavbarD />
      <div> 
        
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/photo" element={<Photo />} /> 
          <Route path="/blogs" element={<Blogs />} /> 
          <Route path="/random" element={<Random/>} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
