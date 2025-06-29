import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  const experiences = [
    {
      "company": "HCL Technologies",
      "duration": "January 2023 - December 2024",
      "role": "Software Engineer",
      "description": "Led development and testing for medical device applications (Abbott Vascular), defining requirements, test strategies, and documentation. Automated workflows using Python and TestComplete to improve efficiency. Managed a small team, mentored peers, and collaborated closely with clients to ensure product quality. Key project: Built D-Bus services for sensor data transmission and integrated XML/JSON handling with unit testing in Google Test."
    },
    {
      "company": "HCL Technologies",
      "duration": "August 2022 - December 2022",
      "role": "Graduate Engineer",
      "description": "Developed IP communication functionality in C/C++ on Ubuntu for medical systems, and contributed to GUI testing for the Wolf-Ridge project using PTC test cases. Delivered technical presentations on C/C++ concepts, documented and analyzed test cases in Excel, and supported reporting workflows to improve quality and performance."
    }
    
    // {
    //   company: "Verisk",
    //   duration: "Mar 2024 - Present",
    //   role: "Cloud/DevOps Engineer",
    //   description: " I manage AWS infrastructure using CloudFormation, Lambda, and Fargate, automate security and compliance with Wiz, GuardDuty, and AWS Security Hub, and optimize CI/CD pipelines with Jenkins and Kubernetes.",
    // },
    // {
    //   company: "Nike",
    //   duration: "Jan 2023 – Feb 2024",
    //   role: "AWS/DevOps Engineer",
    //   description: "I automated cloud infrastructure using AWS, Terraform, Ansible, and Jenkins, optimized security and CI/CD pipelines, and managed Kubernetes deployments for efficient cloud operations.",
    // },
    // {
    //   company: "TCS",
    //   duration: "May 2022  – Nov 2022",
    //   role: " DevOps Engineer  ",
    //   description: "I automated CI/CD pipelines using Jenkins, Git, Terraform, and Puppet, managed AWS infrastructure, and optimized deployment processes for seamless cloud operations.",
    // },
    // {
    //   company: "Syntel",
    //   duration: "Mar 2021 – Apr 2022",
    //   role: "Build and Release Engineer",
    //   description: "I managed CI/CD pipelines using Jenkins, Maven, SVN, and Git, ensuring smooth software releases while automating deployment processes across Windows and Linux environments.",
    // },
  ];

  return (
    <section id="work" className="work-experience">
      <h2>
        My <span>Work Experience</span>
      </h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-left">
              <h3>{exp.company}</h3>
              <p className="duration">{exp.duration}</p>
            </div>
            <div className="timeline-center">
              <div className={`circle ${index % 2 === 0 ? "orange" : "blue"}`}></div>
              {index < experiences.length - 1 && <div className="line"></div>}
            </div>
            <div className="timeline-right">
              <h3>{exp.role}</h3>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
