import React from "react";
import "../App.css";
import CustomBtn from "../Props/Button";
import { getData } from "./helper";

const FirstComponent = () => {
  const handleClick = (name) => {
    alert(`Hello! ${name}`);
  };

  const handleSecondClick = () => {
    var result = getData(Math.floor(Math.random() * 90 + 10));
    document.getElementById("result").innerHTML = result;
  };

  var obj = {
    fname: "Aasimuddin",
    lname: "Mohammed",
    phone: 9876543211,
  };

  var arr = ["a", "b"];

  return (
    <>
      {/* <div
        className={"app"}
        data={["first", "second", "third"]}
        onClick={() => handleClick("test")}
      >
        <h1>First Name : {obj.fname} </h1>
        <h1>Last Name : {obj.lname} </h1>
        <h1>Phone Number : {obj.phone} </h1>
        <h1>Phone Number : {arr[0]} </h1>
      </div> */}
      <h1 id="result"></h1>
      <div onClick={handleSecondClick}>
        <h1>FUNCTION CALL</h1>
      </div>
      <CustomBtn title="FIRST COMP" onClick={() => alert("FIRST COMP")} disabled={true} />
    </>
  );
};

export default FirstComponent;
