import * as types from "./calculator.types";

export const computation = value => {
  return {
    type: types.COMPUTATION,
    payload: value
  };
};

export const toggleWAButton = () => {
  console.log(types.TOGGLE_WA_BUTTON);
  return {
    type: types.TOGGLE_WA_BUTTON
  }
};

export const waResponse = resp => {
  return {
    type: types.WA_RESPONSE,
    resp
  };
};
