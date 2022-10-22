import React from "react";
import "./todo.css";
import Btn from "./Button";

const TodoCard = ({
  item,
  index,
  handleDelete,
  handleUpdateStatus,
  setIsEdit,
  handleEdit,
}) => {
  return (
    <>
      <section className="card--cont">
        <input
          type={"checkbox"}
          id="chkbox"
          checked={item.status}
          onChange={() => handleUpdateStatus(item, index)}
        />
        <span>
          <h3 className={item.status && "card-title"}>{item.task}</h3>
        </span>
        <Btn
          title="Edit"
          onClick={() => {
            setIsEdit(true);
            handleEdit(item, index);
          }}
        />
        <button onClick={() => handleDelete(index)} className="del--btn">
          Delete
        </button>
      </section>
    </>
  );
};

export default TodoCard;
