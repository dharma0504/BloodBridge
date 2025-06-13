import React from "react";
import "./MovingImage.css"; // External CSS file for styling
import ambulance from "./assets/ambulance.png"

const MovingImage = () => {
  return (
    <div className="container">
      <div className="moving-box">
        <img src={ambulance} alt="Moving" />
      </div>
    </div>
  );
};

export default MovingImage;
