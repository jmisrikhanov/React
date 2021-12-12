import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sellPhone } from "../redux/actions/phoneActions";

const PhoneComp = () => {
  const dispatch = useDispatch();
  const phones = useSelector((state) => state.phone.numberOfPhones);

  return (
    <div className="container">
      <h2>Phones [Hooks Example]</h2>
      <h3>
        Number of Phones :<span className="number">{phones}</span>
      </h3>
      <button onClick={() => dispatch(sellPhone())}>Sell Phone</button>
    </div>
  );
};

export default PhoneComp;
