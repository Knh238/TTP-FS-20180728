import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import user from "./user";
import stocksReducer from "./stocks";
const reducer = combineReducers({ user, stocks: stocksReducer });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, logger)
);
const store = createStore(reducer, middleware);

export default store;
export * from "./user";
export * from "./stocks";
