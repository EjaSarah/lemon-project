import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <p>Authentic Mediterranean Cuisine in Chicago</p>
        <button>Book a Table</button>
      </div>
      <div className="hero-image"></div>
    </section>
  );
};

export default Hero;
