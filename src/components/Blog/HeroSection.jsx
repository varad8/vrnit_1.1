import React from 'react'
import "./hero.css"
const HeroSection = () => {
  return (
     <div className="hero-section">
      <div className="container d-flex align-items-center justify-content-center h-100">
        <div className="text-center">
          <h1 className="mb-4">Welcome to My Blog</h1>
          <p className="fs-3 text-dark">Get inspired and stay up-to-date with the latest blog posts on various topics.</p>
        
        </div>
      </div>
    </div>
  );
};



export default HeroSection