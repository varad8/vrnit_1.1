/* CompletedSection.jsx */

import React from "react";
import "../css/CompletedSection.css";
import client from "../Icons/customer_icon.png";
import project_icon from "../Icons/projects_icon.png";
import company_icon from "../Icons/company_icon.png";

const CompletedSection = () => {
  return (
    <section className="completed-section mt-5 mb-3">
      <div className="completed-container">
        <div className="completed-item">
          <img src={project_icon} alt="Completed Projects" />
          <h3 className="completed-heading">Completed Projects</h3>
          <span className="completed-count">10+</span>
        </div>
        <div className="completed-item">
          <img src={client} alt="Clients" />
          <h3 className="completed-heading">Happy Clients</h3>
          <span className="completed-count">10+</span>
        </div>
        <div className="completed-item">
          <img src={company_icon} alt="Companies" />

          <h3 className="completed-heading">Client Companies</h3>
          <span className="completed-count">5+</span>
        </div>
      </div>
    </section>
  );
};

export default CompletedSection;
