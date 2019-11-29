import { createStore, applyMiddleware } from "redux";

import rootReducer from "./rootReducer";

const middlewares = [];
const store = createStore(rootReducer, applyMiddleware(...middlewares));


export default store;

