import React from "react";
import {connect} from "react-redux";

export const Display = ({currentNum, isEmpty}) => {
  return (
    <div className={`display ${isEmpty ? "display__empty" : "display__notEmpty"}`}>
      {currentNum}
    </div>
  );
};

const mapStateToProps = ({calc}) => {
  return {
    currentNum: calc.currentNum,
    isEmpty: calc.isEmpty
  };
}
export default connect(mapStateToProps)(Display);
