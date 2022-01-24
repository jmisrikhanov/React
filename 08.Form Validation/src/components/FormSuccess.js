import React from "react";
import success from "../img/success.svg";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <div className="form-success">We have received you request!</div>
      <img src={success} alt="success-image" className="form-img-2" />
    </div>
  );
};

export default FormSuccess;
