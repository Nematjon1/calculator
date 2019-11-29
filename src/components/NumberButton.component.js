import React from "react";
import { connect } from "react-redux";

import { computation } from "../redux/calculator/calculator.actions";

export const NumberButton = ({value, handleClick}) => {
  return (
    <button
      onClick={() => handleClick(value)} 
      className="number"
      name={value}
    >
      {value}
    </button>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: (value) => dispatch(computation(value))
  };
};

export default connect(null, mapDispatchToProps)(NumberButton);

