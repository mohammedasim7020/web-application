import React, { useState } from "react";
import "./todo.css";
import Input from "./Input";
import TodoCard from "./TodoCard";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [taskMsg, setTaskMsg] = useState("");

  const handleClick = (obj) => {
    setTodoList((prevState) => [obj, ...prevState]);
  };

  const handleDelete = (i) => {
    setTodoList(todoList.filter((item, index) => index !== i));
  };

  const handleUpdateStatus = (item, index) => {
    todoList[index].status = !todoList[index].status;
    setTodoList(() => [...todoList]);
  };

  const handleEdit = (item, index) => {
    setTaskMsg(item.task);
  };

  return (
    <>
      <div className="todo--container">
        <p>To-do's</p>

        <section>
          <Input
            taskMsg={taskMsg}
            setTaskMsg={setTaskMsg}
            isEdit={isEdit}
            todoList={todoList}
            handleClick={handleClick}
          />

          <div id="todo">
            {todoList.map((item, index) => (
              <TodoCard
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                handleEdit={handleEdit}
                item={item}
                index={index}
                handleDelete={handleDelete}
                handleUpdateStatus={handleUpdateStatus}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Todo;
