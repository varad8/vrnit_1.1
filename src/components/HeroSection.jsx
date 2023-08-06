import React from "react";
import "../css/hero.css";
function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to vrnitsolution</h1>
        <p>Threshold Learn,Develop,Earn</p>
        <button>
          <a href="#services">Learn More</a>
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
