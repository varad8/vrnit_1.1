import React, { useState } from "react";
import "../css/login.css";
import logo from "../Icons/vrnlogo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleLogin from "../Icons/google_sign_in.png";
const provider = new GoogleAuthProvider();

provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

const Login = () => {
  const errorMSG = "";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setError("Logged In");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const onGoogleLogin = async (error) => {
    error.preventDefault();
    const auth = getAuth();
    await signInWithPopup(auth, provider)
      .then((result) => {
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
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
        setError(error);

        // ...
      });
  };

  return (
    <>
      <main className="container center mt-5">
        {" "}
        <section className="card p-5 bg-container">
          <h2 className="text-center mt-3 mb-5">Login</h2>
          <form onSubmit={onLogin}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email-address"
                name="email"
                s
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
            {error && (
              <div id="emailHelp" className="form-text text-light mt-5 mb-2">
                {error}
              </div>
            )}
            <div className="d-flex align-items-center justify-content-center">
              {" "}
              <button type="submit" className="btn btn-grad text-white mt-2">
                Submit
              </button>
            </div>{" "}
          </form>
        </section>
        <div className="login-google mb-5">
          <h3 className="text-center mt-5" style={{ color: "red" }}>
            Sign in With
          </h3>
          <img onClick={onGoogleLogin} className="mt-3" src={GoogleLogin} />
        </div>{" "}
      </main>
    </>
  );
};

export default Login;
