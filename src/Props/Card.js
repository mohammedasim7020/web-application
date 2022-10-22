import React from "react";
import "./props.css";

const Card = (props) => {
  console.log(props);

  return (
    <>
      <div className="cardContainer">
        <div  >
          <img className="img-container" src={props.img} />
        </div>
        <div className="name-container">
          <h3>{props.firstName}</h3>
          <h3>{props.lastName}</h3>
        </div>
        <div>
          <h3>{props.email}</h3>
        </div>
      </div>
    </>
  );
};

export default Card;
