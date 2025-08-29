import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>Professional Plumbing Solutions</h1>
        <p>JAKPAN DYNAMIC CONCEPT LIMITED provides top-quality plumbing services with reliability, expertise, and exceptional customer service.</p>
        <a href="#contact" className="btn">Get a Free Quote</a>
      </div>
    </section>
  );
};

export default Hero;