import React from "react";
import { connect } from "react-redux";
import { sellLaptop } from "../redux/actions/laptopActions";

const LaptopComp = (props) => {
  console.log(props);
  return (
    <div className="container">
      <h2>Laptops [Pure Index]</h2>
      <h3>
        Number of Laptops :
        <span className="number">{props.numberOfLaptops}</span>
      </h3>
      <button onClick={props.sellLaptops}>Sell Laptop</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfLaptops: state.laptop.numberOfLaptops,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sellLaptops: () => dispatch(sellLaptop()),
  };
};

// first parameter of connect must be a state
export default connect(mapStateToProps, mapDispatchToProps)(LaptopComp);
