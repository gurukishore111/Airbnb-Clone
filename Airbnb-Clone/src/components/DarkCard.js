import React from "react";
import "./DarkCard.css";
function DarkCard({ image, title, description, price }) {
  return (
    <>
      <div className="container">
        <div className="darkcard">
          <img src={image} alt="rooms" />
          <div className="darkcard_info">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default DarkCard;
