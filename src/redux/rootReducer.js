import {combineReducers} from "redux";

import calcReducer from "./calculator/calculator.reducer";

export default combineReducers({
  calc: calcReducer
});

