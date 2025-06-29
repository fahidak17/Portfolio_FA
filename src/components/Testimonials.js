import React from "react";
import "./Testimonials.css";
import background from "../assets/pic11.png";

const testimonials = [
  {
    name: "Thamba Meshache",
    role: "HOD, Department of Computer Science, Prathyusha Engineering College.",
    rating: 4.8,
    review:
      "Fahid is a sharp, dedicated student with strong technical and analytical skills. In my Computer Networking and Mobile Computing classes, he impressed me with his curiosity and up-to-date knowledge. Under my guidance, he completed an image classification project using deep learning, showing excellent practical ability. I rank him among the top 10% of his class and highly recommend him for further studies and professional roles.",
  },
  {
    name: "Varunbharathi Janardhanam",
    role: "Manager, HCL Technologies",
    rating: 5.0,
    review:
      "Fahid is an enthusiastic, dedicated, and highly capable professional who consistently exceeds expectations. His strong technical skills, proactive mindset, and supportive nature make him a valued team member. With a proven track record of delivering quality results and improving processes, Fahid has the drive and potential to excel in any field he chooses. I strongly recommend him for further studies and future opportunities.",
  },
 
];

const Testimonials = () => {
  return (
    <section
      className="testimonials"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="header">
        <h2>
          Testimonials That <span>Speak to My Results</span>
        </h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card">
            <div className="quote-icon">“</div>
            <div className="content">
              <img src={testimonial.avatar} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p className="role">{testimonial.role}</p>
              <div className="rating">
                <span>⭐⭐⭐⭐⭐</span>
                {testimonial.rating}
              </div>
              <p className="review">{testimonial.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
