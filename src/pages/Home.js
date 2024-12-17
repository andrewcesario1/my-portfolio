import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="intro">
        <div className="intro-text">
          <h1>Hi, I'm Andrew!</h1>
          <p>
            A passionate developer building modern, responsive, and dynamic
            websites to showcase skills and creativity.
          </p>
          <p className="tagline">"Crafting ideas into reality."</p>
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
