import { APPROVALS } from "../../constants/constants";
import { PriorityTypes } from "../types/types";

const INITIAL_STATE = APPROVALS;

const ApprovalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PriorityTypes.CHANGE_PRIORITY:
      const newState = updateObjectInArray(state, action);
      return newState;
    default:
      return state;
  }
};

function updateObjectInArray(array, { payload: { id, priority } }) {
  return array.map((item, index) => {
    if (item.id !== id) return item;

    return {
      ...item,
      priority: priority,
    };
  });
}

export default ApprovalReducer;
