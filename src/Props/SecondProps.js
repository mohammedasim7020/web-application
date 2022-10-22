import React from "react";
import { cbExample } from "../components/helper";
import CstmInput from "./CstmInput";

const SecondProps = () => {
  var obj = {
    fname: "",
    lname: "",
    pass: "",
  };
  return (
    <>
      <div>
        <h1>Here</h1>
        {/* <CstmInput
          type="text"
          placeholder="Enter Your First Name"
          onChange={(event) => (obj["fname"] = event.target.value)}
        /> */}

        {CstmInput({
          type: "text",
          placeholder: "FIRST NAME",
          onChange: (event) => (obj["fname"] = event.target.value),
        })}

        <CstmInput
          type="text"
          placeholder="Enter Your Last Name"
          onChange={(event) => (obj["lname"] = event.target.value)}
          onBlur={() => console.log("blur")}
        />
        <CstmInput
          type="password"
          placeholder="password"
          onChange={
            (event) => (obj["pass"] = event.target.value)}
        />

        <button
          onClick={() =>
            cbExample((data) => console.log("HERE FROM SECONDPROPS.JS : ", data))
          }
        >
          Get Data
        </button>
      </div>
    </>
  );
};

export default SecondProps;
