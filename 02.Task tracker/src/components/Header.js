import React from "react";
// import PropTypes from "prop-types";
import Button from "./Button";

export default function Header({
  title = "Task Tracker as default",
  toggleShow,
  isTaskBarVisible,
}) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={isTaskBarVisible ? "steelblue" : "purple"}
        text={
          isTaskBarVisible ? "Hide Create a Task Bar" : "Show Create a Task Bar"
        }
        toggleShow={toggleShow}
      />
    </header>
  );
}

// Header.defaultProps = {
//   title: "Task Tracker as default",
// };

// Header.PropTypes = {
//   title: PropTypes.string.isRequired,
// };
