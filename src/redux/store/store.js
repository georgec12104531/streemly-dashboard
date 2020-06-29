import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import RootReducer from "../reducers/root-reducer";

const store = createStore(RootReducer, applyMiddleware(logger));
export default store;
