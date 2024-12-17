import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-content">
        <h1>About Me</h1>
        <div className="about-description">
          <p>
            Hello! My name is <strong>Andrew</strong>, and I'm a passionate developer with a background in creating modern and responsive websites. I hold a degree in Computer Science and have a strong interest in web development, problem-solving, and user experience design.
          </p>
          <p>
            I enjoy working with technologies like <strong>React, JavaScript, HTML, CSS, and Node.js</strong>. In addition to web development, I am interested in learning new technologies, contributing to open-source projects, and collaborating with others to solve real-world challenges.
          </p>
          <p>
            Outside of programming, I love <strong>gaming, hiking, and photography</strong>. These hobbies help me stay creative and balanced.
          </p>
        </div>

        {/* Resume Section */}
        <div className="resume-section">
          <a
            href={`${process.env.PUBLIC_URL}/my-resume.pdf`}
            download="Andrew-Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="resume-button">View Resume</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
