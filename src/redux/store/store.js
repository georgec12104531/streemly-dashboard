import { createStore } from "redux";
import { APPROVALS } from "../../constants/constants";

const INITIAL_STATE = {
  approvals: APPROVALS,
};

const ApprovalReducer = (state = INITIAL_STATE, action) => {
  console.log("state", state);
  return state;
};

const store = createStore(ApprovalReducer);
export default store;
