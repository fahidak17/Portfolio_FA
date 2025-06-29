import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item active"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#services">Service</a></li>
      </ul>
      <div className="logo">
        <span className="logo-icon">FA</span>
        <span className="logo-text">Fahid Akthar Ansar</span>
      </div>
      <ul className="nav-links">
        <li className="nav-item"><a href="">Resume</a></li>
        <li className="nav-item"><a href="#portfolio">Project</a></li>
        <li className="nav-item"><a href="#Footer">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
