import React, { useEffect} from "react";
import wajs from "wajs";
import { connect } from "react-redux";

import { computation, toggleWAButton, waResponse } from "../redux/calculator/calculator.actions";

const OperationButton = ({value, currentNum, toggleWAButton, handleClick, WAButton}) => {
  useEffect(() => {
    let result;
    if(value === "=" && currentNum) {
      const waAppId = process.env.REACT_APP_WA;
      const waClient = new wajs(waAppId);
      const queryString = currentNum;
      const queryOptions = {
        format: "plaintext"
      };
      waClient.query(queryString, queryOptions)
        .then((response) => {
          result = response
          waResponse(result);
        })
        .catch((err) => console.log(err))
    }
  }, [value, currentNum])
  const clickHandler = () => {
    handleClick(value);
    if(value === "WA") {
      toggleWAButton();
    }
  };
  let isActive;
  if(value === "WA" && WAButton) {
    isActive = "WA__button--active";
  } else if(value === "WA" && !WAButton) {
    isActive = "WA__button--non-active";
  }
  return (
    <button
      className={`operation ${isActive}`}
      onClick={clickHandler}
      name={value}
    >{value}</button>
  );
};

const mapStateToProps = ({calc}) => {
  return {
    WAButton: calc.WAActivated,
    currentNum: calc.currentNum
  };
}

const mapDispatchToProps = dispatch => {
  return {
    toggleWAButton: () => dispatch(toggleWAButton()),
    handleClick: (value) => dispatch(computation(value)),
    waResponse: (resp) => dispatch(waResponse(resp))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OperationButton);

