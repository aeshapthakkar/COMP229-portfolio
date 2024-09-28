import React from 'react';
import './Navbar.css'; // Import Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar"> {/* Add class to ensure scoping */}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Me</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
