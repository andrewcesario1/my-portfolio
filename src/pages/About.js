import React from "react";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-content">
        <h1>About Me</h1>
        <div className="about-description">
          <p>
            Hello! My name is <strong>Andrew</strong>, and I'm a passionate developer with a background creating programs, websites and games. I am in progress for a Degree in Computer Science at California State University of Fullerton and have a strong interest in Game Development and solving challenging problems.
          </p>
          <p>
            I enjoy working with technologies like <strong>React, JavaScript, HTML, CSS, and Node.js</strong> for web development and <strong>C++, C#, Python, Unity, Unreal Enginge</strong> for game and desktop app development.
          </p>
          <p>
            Outside of programming, I love <strong>gaming, eating, and sleeping</strong>. These hobbies help me stay creative and balanced.
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
