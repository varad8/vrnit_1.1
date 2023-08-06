import React, { useState } from "react";
import "../css/SliderCard.css";
import VRN from "../Icons/VRN.png";
import udhar from "../Icons/udharapp.png";
import vrnaigpt from "../Icons/VRNAIGPT.png";
const SliderCard = () => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = x - startX;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="container">
      <h2 className="fw-bold mt-3 mb-5" id="projects">
        Recent Projects
      </h2>
      <div
        className="slider"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className="slider-content">
          <img src={vrnaigpt} alt="Chatbot Using Python" />
          <div className="slider-text">
            <h3>Project 1: VRNAICHATBOT USING Python Flask</h3>
            <a
              className="btn btn-primary"
              href="/documentation/python-chatbotai"
            >
              Documentation
            </a>
          </div>
        </div>

        <div className="slider-content">
          <img src={udhar} alt="Chatbot Using Python" />
          <div className="slider-text">
            <h3>Project 2: Udhar App</h3>
            <a className="btn btn-primary" href="/documentation/udhar-app">
              Documentation
            </a>
          </div>
        </div>

        <div className="slider-content">
          <img src={VRN} alt="Doctor Appointment App" />
          <div className="slider-text">
            <h3>Project 3: Doctor Appointment App</h3>
            <p>
              This App is helpful for the Users as well as Doctor.How It Work ?
              Please Read Documentation From Here. And Buy This App/Project at
              Lowest Price
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
