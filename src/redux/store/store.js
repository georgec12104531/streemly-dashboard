import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { APPROVALS } from "../../constants/constants";
import { PriorityTypes } from "../types/types";

const INITIAL_STATE = {
  approvals: APPROVALS,
};

const ApprovalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PriorityTypes.CHANGE_PRIORITY:
      const newState = {
        ...state,
        approvals: updateObjectInArray(state.approvals, action),
      };
      return newState;
    default:
      return state;
  }
};

function updateObjectInArray(array, { payload: { id, priority } }) {
  return array.map((item, index) => {
    if (item.id !== id) {
      return item;
    }

    return {
      ...item,
      priority: priority,
    };
  });
}

// Logger with default options
const store = createStore(ApprovalReducer, applyMiddleware(logger));
export default store;
