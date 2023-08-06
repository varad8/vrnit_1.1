import React from "react";
import Web_Icon from "../Icons/web_icon.png";
import App_Icon from "../Icons/app_icon.png";
import Graphics_Icon from "../Icons/graphics_icon.png";
import Digital_Marketing_Icon from "../Icons/digital_marketing_icon.png";
import Business_Icon from "../Icons/google_business_icon.png";
import Finance_Icon from "../Icons/finance_icon.png";

import "../css/servicesection.css";
function ServiceSection() {
  return (
    <div className="container mt-3">
      <p className="fs-2 text-start fw-bold" id="services">
        Services
      </p>
      <section className="services">
        <div className="service-card">
          <div className="service-icon">
            <img src={Web_Icon} className="icon" alt="Web Design" />
          </div>
          <h3>Web Design</h3>
          <p>
            Web design is the process of creating visually appealing and
            user-friendly websites, but it's also important to consider SEO
            (Search Engine Optimization) during the design process. Keywords
            play a crucial role in SEO, so its easy to get highly and organic
            traffic on your website.{" "}
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={App_Icon} className="icon" alt="App Development" />
          </div>
          <h3>App Development</h3>
          <p>
            Mobile apps are essential for businesses because they provide a
            convenient way for customers to interact with the brand. Apps can
            increase customer engagement, loyalty, arevenue easy access Overall,
            mobile apps are a crucial tool for businesses to stay competitive in
            today's digital landscape.{" "}
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={Graphics_Icon} className="icon" alt="Graphics Design" />
          </div>
          <h3>Graphics Design</h3>
          <p>
            Graphic design involves the use of typography, images, colors, and
            layout to create designs that can be used for various purposes, such
            as branding, advertising, and marketing.{" "}
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img
              src={Digital_Marketing_Icon}
              className="icon"
              alt="Digital Marketing"
            />
          </div>
          <h3>Digital Marketing</h3>
          <p>
            Digital marketing is the practice of promoting products or services
            using digital channels, such as search engines, social media, email,
            and websites. It involves various strategies and techniques to reach
            and engage with target audiences online.{" "}
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src={Business_Icon} className="icon" alt="Google Business" />
          </div>
          <h3>Google Business</h3>
          <p>
            GMB tool offered by Google that allows businesses to manage their
            online presence across Google's search engine and other platforms.
            It helps businesses to display important information.{" "}
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={Finance_Icon} className="icon" alt="Loan Service" />
          </div>
          <h3>Financial Boost</h3>
          <p>
            In the Finance Boost We Provide Loan Service from DSA Partner.That
            Loans can be used for various purposes such as purchasing a home,
            starting a business, or financing a major purchase.{" "}
          </p>
        </div>
      </section>
    </div>
  );
}

export default ServiceSection;
