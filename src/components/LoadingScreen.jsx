import React from "react";
import "../css/spinner.css";
function LoadingScreen(props) {
  return (
    <div className="loading-screen">
      <div className="d-flex align-items-center justify-content-center border p-2  border-dark rounded bg-white">
        {" "}
        <div className="spinner"></div>
        <span style={{ marginLeft: "5px" }}>{props.message}</span>
      </div>
    </div>
  );
}
export default LoadingScreen;
