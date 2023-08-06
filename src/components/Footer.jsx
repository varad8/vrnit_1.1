import React from "react";
import "../css/footer.css";
import logo from "../Icons/vrnlogo.png";
import Linkedin from "../Icons/linkedin.png";
import Instagram from "../Icons/instagram.png";
import youtube from "../Icons/youtube.png";
import Facebook from "../Icons/facebook.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <div className="d-flex  align-items-center">
          <img src={logo} alt="Company Logo" />
          <h3>VRNITSOLUTION</h3>
          <sup className="fs-4">&reg;</sup>
          <br />
        </div>
      </div>
      <div className="footer-social">
        <ul>
          <li>
            <a href="">
              <img src={Instagram}></img> Instagram
            </a>
          </li>
          <li>
            <a href="">
              <img src={Facebook}></img> Facebook
            </a>
          </li>
          <li>
            <a href="">
              <img src={youtube}></img> YouTube
            </a>
          </li>
          <li>
            <a href="">
              <img src={Linkedin}></img> Linkedin
            </a>
          </li>
        </ul>
        <div className="counter">
          {" "}
          <img
            src="https://counter2.optistats.ovh/private/freecounterstat.php?c=d98dku784j6xdex887yqyede38a65pyu"
            border="2"
            title="free website counters"
            alt="Visiting counters"
          />
        </div>
      </div>
      <div className="footer-address">
        <p>568, Karwanchiwadi Near Hanuman Temple,</p>
        <p>Phone: (+91) 7058834216</p>
        <p>Email: varadnikharage201@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
