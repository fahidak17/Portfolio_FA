import React from "react";
import "./WhyHireMe.css";
import pic17 from "../assets/pic17.png"; // Import profile picture
import pic03 from "../assets/pic03.png"; // Import concentric circles

const WhyHireMe = () => {
  return (
    <section id="about" className="why-hire-me">
      <div className="why-hire-me-container">
        {/* Profile Image Section */}
        <div className="profile-image-container">
          <img
            className="concentric-circle"
            src={pic03}
            alt="Concentric Circle"
          />
          <img
            className="profile"
            src={pic17}
            alt="Profile"/>
        </div>

        {/* Content Section */}
        <div className="why-hire-me-content">
          <h2>
            Why <span>Hire me?</span>
          </h2>
          <p className="description">
          I’m a skilled engineer with strong experience in software development and automation, now expanding my expertise through an MSc in Business Analytics. I combine technical excellence with data-driven business insight to deliver practical, high-impact solutions and support strategic decision-making.          </p>
          <div className="stats">
            <div className="stat-item">
              <h3>20</h3>
              <p>Platforms Deployed</p>
            </div>
            <div className="stat-item">
              <h3>25+</h3>
              <p>Project Completed</p>
            </div>
          </div>
          <a href="#Footer" className="hire-me-button">Hire Me</a>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;