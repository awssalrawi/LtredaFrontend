import React from "react";
import "./styles/loadingSpinner.scss";
const LoaderSpinner = () => {
  return (
    <div className="load-center">
      <div className="load-ring"></div>
      <span className="load-span">loading...</span>
    </div>
  );
};

export default LoaderSpinner;
