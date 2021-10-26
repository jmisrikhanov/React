import React from "react";
// import PropTypes from "prop-types";
import Button from "./Button";

export default function Header({ title = "Task Tracker as default" }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="purple" text="Show Create a Task Bar" />
    </header>
  );
}

// Header.defaultProps = {
//   title: "Task Tracker as default",
// };

// Header.PropTypes = {
//   title: PropTypes.string.isRequired,
// };
