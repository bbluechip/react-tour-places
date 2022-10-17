import React from "react";
import "../styles/card.css";

const Card = (props) => {
  console.log(props);
  return (
    <div className="cardOuter">
      <div className="cardDiv">
        <h2>{props.title}</h2>
        <img className="imageHover" src={props.img} alt={props.title} />
        <div className="pDiv">
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
