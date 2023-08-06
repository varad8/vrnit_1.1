import React, { useState, useEffect } from "react";
import "./admin.css";
import Web from "./ServicesTabs/Web";
import AppDev from "./ServicesTabs/AppDev";
import Graphics from "./ServicesTabs/Graphics";
import Marketing from "./ServicesTabs/Marketing";
import { auth } from "../../firebase";
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Web Development");
  const [user, setUser] = useState(null);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.uid);
      }
    });
  }, []);

  return (
    <>
      {user === "yBVZw3VhaUeO9KuZxwDco3wkptY2" && (
        <div className="admin-dashboard">
          {/* Sidebar */}
          <div className="sidebar">
            <a
              className={activeTab === "Web Development" ? "active" : ""}
              onClick={() => handleTabClick("Web Development")}
            >
              Web Development
            </a>
            {/* Other sidebar links */}
            <a
              className={activeTab === "App Development" ? "active" : ""}
              onClick={() => handleTabClick("App Development")}
            >
              App Development
            </a>

            {/* Marketing */}
            <a
              className={activeTab === "Marketing" ? "active" : ""}
              onClick={() => handleTabClick("Marketing")}
            >
              Marketing
            </a>

            {/* Marketing */}
            <a
              className={activeTab === "Graphics Design" ? "active" : ""}
              onClick={() => handleTabClick("Graphics Design")}
            >
              Graphics Design
            </a>
          </div>

          {/* Content area */}
          <div className="content">
            <h1 className="bg-primary p-3 text-light">Admin Dashboard</h1>
            {/* Render content based on active tab */}
            <div className="p-2">
              {" "}
              <p>Here You Display the Data of {activeTab}</p>
              <p>Active Tab: {activeTab}</p>
              {activeTab === "Web Development" && <Web />}
              {activeTab === "App Development" && <AppDev />}
              {activeTab === "Graphics Design" && <Graphics />}
              {activeTab === "Marketing" && <Marketing />}
            </div>
          </div>
        </div>
      )}
      {user == null && <p className="m-3">Unauthorized</p>}
    </>
  );
};

export default AdminDashboard;
