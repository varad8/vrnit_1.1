import React, { useState, useEffect } from "react";
import "firebase/auth";
import { auth } from "../firebase";
import logo from "../Icons/vrnlogo.png";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function nextLogin() {
    navigate("/login");
  }

  function pricing() {
    if (user) {
      navigate("/pricing");
    } else {
      setError(true);
    }
  }
  function nextSignup() {
    navigate("/signup");
  }
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);

  // check condition and update error state
  useEffect(() => {
    const condition = user;
    setError(!condition);
  }, []);

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-body-light shadow"
      style={{
        background: "white",
      }}
      id="navbar-example2"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            className="d-inline-block"
            style={{ width: "50px", height: "50px" }}
            width="30"
            height="30"
            src={logo}
            alt="VRNITSOLUTIONLOGI"
          />
          vrnitsolution
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#vissionmission">
                VisionMission
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/admin">
                Admin
              </a>
            </li>

            {user ? (
              <li className="nav-item">
                <Link
                  to={`/profile/${auth.currentUser.uid}`}
                  className="nav-link"
                >
                  Profile
                </Link>
              </li>
            ) : (
              ""
            )}

            {/* <li className="nav-item">
              <a className="nav-link">
                <Link to={`/profile/${userID}`}>Profile</Link>
              </a>
            </li> */}

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Plans
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#" onClick={pricing}>
                    Web Design
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={pricing}>
                    App Development
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Marketing
                  </a>
                  <a className="dropdown-item" href="#">
                    Finance
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            {user ? (
              <div>
                <div className="text-center d-flex align-items-center justify-content-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                    style={{ width: "32px", height: "32px" }}
                    className="rounded"
                    alt="User Icon"
                  />
                  <p className="text-center m-0">Hi, {user.email}</p>
                  <button
                    className="btn btn-danger m-1"
                    onClick={() => auth.signOut()}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center d-flex align-items-center justify-content-center">
                  <button className="btn btn-primary m-1" onClick={nextLogin}>
                    Login
                  </button>

                  <button
                    className="btn btn-secondary m-1"
                    onClick={nextSignup}
                  >
                    Signup
                  </button>

                  {error && (
                    <div className="alert alert-warning p-1 m-0" role="alert">
                      Login to See Pricing..!
                    </div>
                  )}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
