import React from "react";
import "../css/vision.css";
function VisionMission() {
  return (
    <div className="container mt-5 mb-5">
      <div
        className="d-flex  justify-content-center align-items-center"
        id="vissionmission"
      >
        <div className="row">
          <div className="col-md-6">
            <div className="vision-mission-container">
              <i className="fas fa-quote-left quote-icon"></i>
              <div className="vision-statement">
                <strong>Vision</strong>
                <blockquote>
                  To be a leading global provider of innovative IT solutions,
                  driving digital transformation for businesses through
                  cutting-edge technologies and exceptional service.
                </blockquote>
              </div>
              <i className="fas fa-quote-right quote-icon"></i>
            </div>
          </div>

          <div className="col-md-6">
            <div className="vision-mission-container">
              <i className="fas fa-quote-left quote-icon"></i>
              <div className="vision-statement">
                <strong>Mission</strong>
                <blockquote>
                  Our mission is to empower businesses with transformative IT
                  solutions that accelerate growth, enhance productivity, and
                  drive competitive advantage. We are committed to delivering
                  top-quality services and solutions, leveraging our technical
                  expertise, customer-centric approach, and continuous
                  innovation. Our goal is to establish long-term partnerships
                  with our clients, helping them achieve their business
                  objectives and succeed in the digital era.
                </blockquote>
              </div>
              <i className="fas fa-quote-right quote-icon"></i>
            </div>
          </div>
        </div>

        <script src="https://kit.fontawesome.com/4c273e6a5c.js"></script>
      </div>
    </div>
  );
}

export default VisionMission;
