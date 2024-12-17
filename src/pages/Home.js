import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="intro">
        <div className="intro-text">
          <h1>Hi, I'm Andrew!</h1>
          <p>
            A Computer Science Major at CSUF, here is my portfolio showcasing everything about me and my career.
          </p>
          <p className="tagline">
            <Typewriter
              words={[
                "Crafting ideas into reality.",
                "Turning concepts into code.",
                "Developing for the future.",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </div>
        <div className="intro-image">
          <img
            src={`${process.env.PUBLIC_URL}/my-photo.jpg`}
            alt="Professional Avatar"
            className="avatar"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
