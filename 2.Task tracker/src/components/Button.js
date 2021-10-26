import React from "react";

export default function Button({ text, color }) {
  return (
    <div>
      <button className="btn" style={{ backgroundColor: color }}>
        {text}
      </button>
    </div>
  );
}
