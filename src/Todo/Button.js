import React from "react";
import "./todo.css";

const Btn = (props) => {
  return (
    <>
      <div>
        <button className="add--btn" onClick={props.onClick} >{props.title}</button>
      </div>
    </>
  );
};

export default Btn;
