import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducers from "./Reducers";
import initialState from "./Reducers/initialState";

const store = createStore(
  Reducers,
  initialState,
  compose(applyMiddleware(thunk))
);
export default store;
