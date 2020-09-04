import React from "react";
import "./Cards.css";
function Cards({ image, title, description, price }) {
  return (
    <div className="card_container">
      <div className="card">
        <img src={image} alt="rooms" />
        <div className="card_info">
          <h2>{title}</h2>
          <h4>{description}</h4>
          <h3>{price}</h3>
        </div>
      </div>
    </div>
  );
}

export default Cards;
