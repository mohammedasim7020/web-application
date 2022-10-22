import React from "react";
import "./props.css";

const CustomBtn = (props) => {
  console.log(props);
  return (
    <>
      <button
        onClick={() => props.onClick("aasim", "1234")}
        className="btn"
        disabled={props.disabled}
      >
        {props.title}
      </button>
    </>
  );
};

export default CustomBtn;
