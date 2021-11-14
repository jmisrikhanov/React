import React from "react";
import deleteLogo from "../assets/delete.png";
import okLogo from "../assets/ok.png";

import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/actions/todoActions";

const TodoItem = ({ completed, id, text }) => {
  const dispatch = useDispatch();

  const styled = {
    borderRadius: "20px",
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "orange",
  };

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };
  const handleDelete = () => {
    dispatch(removeTodo(id));
  };
  return (
    <div style={styled} className="todoList">
      <h2
        style={{
          width: "75%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {text}
      </h2>
      <div>
        <span>
          <img
            src={okLogo}
            style={{ width: "40px", margin: "10px" }}
            alt="ok logo"
            onClick={handleToggle}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            style={{ width: "40px", margin: "10px" }}
            alt="delete logo"
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
