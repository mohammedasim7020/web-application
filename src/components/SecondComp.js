import React from "react";
import FirstComponent from "./FirstComponent";

const SecondComp = () => {
  var count = 0;

  const handleCount = () => {
    count += 1;
    document.getElementById("count").innerHTML = count;
    document.getElementById("num").innerHTML = count % 2 === 0 ? "Even" : "odd";
    console.log("Count : ", count);
  };

  return (
    <>
      <div>
        {/* {FirstComponent()} */}
        <FirstComponent />
      </div>
      <div>
        <h1>Second</h1>
        <h1 id="count">{count}</h1>
        <h1 id="num">Even</h1>
        {count % 2 === 0 ? <h1>Even</h1> : <h1>Odd</h1>}

        {/* <h1>{count % 2 === 0 ? "Even" : "Odd"}</h1> */}
        <button onClick={handleCount}>Add Count</button>
      </div>
    </>
  );
};

export default SecondComp;
