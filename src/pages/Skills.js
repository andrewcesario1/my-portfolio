import React from "react";
import "./styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>My Skills</h1>

      <div className="skills-section">
        {/* Technical Skills */}
        <div className="skills-category">
          <h2>Technical Skills</h2>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>C++ & C#</li>
            <li>Unity & Unreal Engine</li>
            <li>Git & GitHub</li>
            <li>SQL & NoSQL Databases</li>
          </ul>
        </div>

        {/* Non-Technical Skills */}
        <div className="skills-category">
          <h2>Non-Technical Skills</h2>
          <ul>
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
            <li>Project Management</li>
            <li>Communication</li>
            <li>Time Management</li>
            <li>Adaptability</li>
            <li>Critical Thinking</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
