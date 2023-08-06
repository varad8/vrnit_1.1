import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../src/firebase";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import CompletedSection from "./components/CompletedSection";
import SliderCard from "./components/SliderCard";
import Footer from "./components/Footer";
import VisionMission from "./components/VisionMission";
import ReviewSection from "./components/StarRating/ReviewSection";
import LoadingScreen from "./components/LoadingSplash/LoadingScreen";
const Home = () => {
  const navigate = useNavigate();

  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    // Simulate a 2 second delay for demonstration purposes
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
      document.getElementById("mainscreen").style.display = "block";
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/Login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      {showSplashScreen && <LoadingScreen />}

      <div
        style={{ background: "white" }}
        id="mainscreen"
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        class="scrollspy-example"
        tabindex="0"
      >
        <NavBar />
        <HeroSection />
        <ServiceSection />
        <SliderCard />
        <CompletedSection />
        <ReviewSection />
        <VisionMission />
        <Footer />
      </div>
    </>
  );
};

export default Home;
