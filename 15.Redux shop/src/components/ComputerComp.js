import React, { useState } from "react";
import { connect } from "react-redux";
import { sellComputer } from "../redux/actions/computerActions";

const ComputerComp = (props) => {
  console.log(props);
  const [number, setNumber] = useState(1);
  return (
    <div className="container">
      <h2>Computers [Pure Redux with Payload]</h2>
      <h3>
        Number of Computers:
        <span className="number">{props.computers}</span>
      </h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button onClick={() => props.sellComputers(number)}>
        Sell {number} Computer
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    computers: state.computer.numberOfComputers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sellComputers: (number) => dispatch(sellComputer(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComputerComp);
