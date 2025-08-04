import React, { useState } from 'react';
import '../assets/css/navbar.css' // Import the CSS file

import logo from '../assets/images/logo.png'; // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="logo"><img src={logo} alt="Brand Logo" /></a>
      
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
        &#9776;
      </button>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;