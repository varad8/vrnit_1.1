import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../css/login.css";

import logo from "../Icons/vrnlogo.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleLogin from "../Icons/google_sign_in.png";
const provider = new GoogleAuthProvider();

// provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password == cpassword) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setIsLoading(false);
          setIsRegistered(true);
          const user = userCredential.user;
          setError("Registered");
          console.log(user);
          navigate("/login");
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      setError("Password & Confirm Password Does Not Match");
    }
  };

  const onGoogleLogin = async (error) => {
    error.preventDefault();
    const auth = getAuth();
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="container mt-3 mb-5">
      {isLoading ? (
        <div
          className="d-flex center align-items-center text-black justify-content-center p-2"
          id="popup-container"
        >
          Loading ...
        </div>
      ) : (
        <div>
          {isRegistered ? (
            <div>
              <p>Thank you for registering!</p>
              {/* other content for registered users goes here */}
            </div>
          ) : (
            <div>
              <div className="mt-5 mb-5">
                <br />
              </div>
              <section className="card p-5 bg-container mt-5">
                <h2 className="text-center">Signup</h2>
                <form onSubmit={onSubmit}>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email-address"
                      name="email"
                      required
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      required
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="cpassword"
                      name="cpassword"
                      required
                      placeholder="Confirm Password"
                      onChange={(e) => setCpassword(e.target.value)}
                    />
                  </div>

                  {error && (
                    <div id="error" className="form-text text-light mt-5 mb-2">
                      {error}
                    </div>
                  )}

                  <div className="d-flex align-items-center justify-content-center">
                    {" "}
                    <button
                      type="submit"
                      className="btn btn-grad text-white mt-5"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </section>
              <div className="login-google mb-5 mt-5">
                <h3 className="text-center" style={{ color: "red" }}>
                  Sign in With
                </h3>
                <img
                  onClick={onGoogleLogin}
                  className="mt-3"
                  src={GoogleLogin}
                />
              </div>{" "}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Signup;
