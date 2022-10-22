import React from "react";
import CustomBtn from "./Button";
import Card from "./Card";
import Dp from "./../assets/profile.png";

const BasicProps = () => {
  const handleLogin = (email, password) => {
    // alert("I'm Login alert");
    console.log(email, password);
  };

  const handleLogout = () => {
    alert("I'm Logout alert");
  };
  const handleRegister = () => {
    alert("I'm Register alert");
  };
  return (
    <>
      <h1>Basics of Props</h1>
      <CustomBtn title="Login" onClick={handleLogin} />
      <CustomBtn title="Logout" onClick={handleLogout} />
      <CustomBtn title="Register" onClick={handleRegister} />
      {/* <Card
        firstName="Mohammed"
        lastName="Aasim"
        email="aasim@gmail.com"
        img={
          "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5"
        }
      /> */}
    </>
  );
};

export default BasicProps;
