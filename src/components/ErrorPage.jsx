import React from "react";
import "../css/errorpage.css";
const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404 Not Found</h1>
      <p>Sorry, something went wrong. Please try again later.</p>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default ErrorPage;
