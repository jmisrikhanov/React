import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";

const TodoInput = () => {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    } else alert("Can not be empty TODO!");
  };
  return (
    <div style={{ minWidth: "200px" }}>
      <form>
        <input
          type="text"
          placeholder="Add Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: "200px",
            height: "50px",
            fontSize: "1rem",
            paddingLeft: "15px",
            borderRadius: "20px 0 0 20px",
            outline: "none",
          }}
        />
        <button
          style={{
            height: "50px",
            width: "75px",
            borderRadius: "0 20px 20px 0",
            backgroundColor: "#d44000",
            fontSize: "1rem",
            color: "white",
            outline: "none",
          }}
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
