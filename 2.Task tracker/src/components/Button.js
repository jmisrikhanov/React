import React from "react";

export default function Button({ text, color, toggleShow }) {
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={toggleShow}
      >
        {text}
      </button>
    </div>
  );
}
