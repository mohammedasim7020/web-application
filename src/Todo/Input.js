import React, { useState } from "react";
import Btn from "./Button";
import "./todo.css";

const Input = ({ todoList, handleClick, taskMsg, setTaskMsg, isEdit }) => {
  const handleAdd = () => {
    if (taskMsg.trim()) {
      if (!todoList.find((item) => item.task === taskMsg)) {
        var obj = {
          id: Math.random(),
          task: taskMsg,
          status: false,
        };
        handleClick(obj);
        setTaskMsg("");
      } else {
        alert("Task Is Already Added");
      }
    } else {
      alert("Task Should not be empty");
    }
  };

  return (
    <>
      <div className="container--input">
        <label for="input">Enter your To-Do task here</label>
        <section className="input--cont">
          <input
            type={"text"}
            id="input "
            value={taskMsg}
            onChange={(event) => setTaskMsg(event.target.value)}
          />
          <Btn title={isEdit ? "Update" : "+ ADD"} onClick={handleAdd} />
        </section>
      </div>
    </>
  );
};

export default Input;
