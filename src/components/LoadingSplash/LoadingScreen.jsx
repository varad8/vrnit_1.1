import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(25);
  useEffect(() => {
    // Increment progress every second
    const interval = setInterval(() => {
      const newProgress = progress + 10;
      setProgress(newProgress > 100 ? 100 : newProgress);
    }, 500);

    // Clear interval when progress reaches 100
    if (progress === 100) {
      clearInterval(interval);
    }

    // Cleanup function to clear interval on unmount
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <>
      {" "}
      <div
        className="container-fluid d-flex justify-content-center align-items-center flex-column"
        style={{
          background: "white",
          zIndex: "99999",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Add your loading spinner or content here */}
        <div className="progress" style={{ width: "60%" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >{`${progress}%`}</div>
        </div>

        <h3 className="mt-2">Loading ...</h3>
      </div>
    </>
  );
};

export default LoadingScreen;
