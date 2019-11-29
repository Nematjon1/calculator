import * as types from "./calculator.types";

const INITIAL_STATE = {
  currentNum: "0",
  hasDecimal: false,
  hasOperator: false,
  isEmpty: true,
  WAActivated: false
};

const calcReducer = (state = INITIAL_STATE, action) => {
  switch(true) {
    case types.WA_RESPONSE === action.type:
      if(action.payload === "=") {
        return {
          ...state,
          currentNum: action.resp
        };
      } else {
        return {
          ...state
        };
      }
    case types.TOGGLE_WA_BUTTON === action.type:
      return {
        ...state,
        WAActivated: !state.WAActivated
      };
    case action.payload === "0" ||
        action.payload === "1" ||
        action.payload === "2" ||
        action.payload === "3" ||
        action.payload === "4" ||
        action.payload === "5" ||
        action.payload === "6" ||
        action.payload === "7" ||
        action.payload === "8" ||
        action.payload === "9" ||
        action.payload === "(" ||
        action.payload === ")":
      if(state.currentNum !== "0") {
        return {
          ...state,
          currentNum: state.currentNum += action.payload,
          hasOperator: false,
          isEmpty: false
        };
      } else {
        return {
          ...state,
          currentNum: action.payload,
          isEmpty: false
        };
      }
    case action.payload === "sqrt(x)":
      if(!state.hasOperator) {
        return {
          ...state,
          currentNum: Math.sqrt(Number(state.currentNum))
        };
      } else {
        return {
          ...state,
          currentNum: "0",
          isEmpty: true
        };
      }
    case action.payload === "^":
      if(!state.hasOperator) {
        return {
          ...state,
          currentNum: state.currentNum += "**",
          hasOperator: true,
          hasDecimal: false,
          isEmpty: false
        };
      } else {
        const newNum = state.currentNum.slice(0, state.currentNum.length - 1);
        state.currentNum = newNum;
        return {
          ...state,
          currentNum: state.currentNum += "**",
          isEmpty: false
        };

      }
    case action.payload === "+" ||
        action.payload === "-" ||
        action.payload === "*" ||
        action.payload === "/":
      if(!state.hasOperator) {
        return {
          ...state,
          currentNum: state.currentNum += action.payload,
          hasOperator: true,
          hasDecimal: false
        };
      } else {
        const newNum = state.currentNum.slice(0, state.currentNum.length - 1);
        state.currentNum = newNum;
        return {
          ...state,
          currentNum: state.currentNum += action.payload
        };
      }
    case action.payload === "C":
      return {
        ...state,
        currentNum: "0",
        hasOperator: false,
        hasDecimal: false,
        isEmpty: true
      };
    case action.payload === "=":
      return {
        ...state,
        currentNum: eval(state.currentNum),
        hasOperator: false,
        hasDecimal: true,
        isEmpty: false
      };
    case action.payload === ".":
      if(!state.hasDecimal) {
        return {
          ...state,
          currentNum: state.currentNum += ".",
          hasDecimal: true
        };
      }
      break;
    default:
      return state;
  }
}

export default calcReducer;
