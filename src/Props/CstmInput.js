import React from "react";

const CstmInput = ({ type, placeholder, onChange, ...rest }) => {
  console.log(onChange);
  return (
    <>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        />
      </div>
    </>
  );
};

export default CstmInput;
