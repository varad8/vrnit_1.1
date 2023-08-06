import React from "react";
import "./common.css";
const FollowMe = () => {
  return (
    <>
      <section className="follow-me-section">
        <h2>Follow Me</h2>
        <ul className="social-links">
          <li>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default FollowMe;
