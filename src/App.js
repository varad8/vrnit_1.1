import "./App.css";
import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import PricingSection from "./components/plansection/PricingSection";
import Profile from "./components/profile/Profile";
import ErrorPage from "./components/ErrorPage";
import StarRatingForm from "./components/StarRating/StarRatingForm";
import BlogHome from "./components/Blog/BlogHome";
import Python_ChatBot from "./components/Blog/Pages/Python_ChatBot";
import AdminDashboard from "./components/Admin/AdminDashboard";
import PythonChatBot from "./components/documentation/PythonChatBot";
import UdharApp from "./components/documentation/UdharApp";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<PricingSection />} />
          <Route path="/profile/:userID" Component={Profile} />
          <Route path="/ratings" Component={StarRatingForm} />
          <Route path="*" Component={ErrorPage} />
          {/* your 404 page not found component */}
          {/* For BLog */}
          <Route path="/blog" Component={BlogHome} />
          {/* Chat Bot Python cmd */}
          <Route
            path="/blog/python-chatbot-using-openai"
            Component={Python_ChatBot}
          />
          {/* Admin Dashboard */}
          <Route path="/admin" Component={AdminDashboard} />

          {/* DOcumentattion */}
          <Route
            path="/documentation/python-chatbotai"
            Component={PythonChatBot}
          />
          <Route path="/documentation/udhar-app" Component={UdharApp} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
