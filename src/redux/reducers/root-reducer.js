import { combineReducers } from "redux";
import ApprovalReducer from "./approval-reducer";
import NavReducer from "./nav-reducer";

const RootReducer = combineReducers({
  approvals: ApprovalReducer,
  navItems: NavReducer,
});

export default RootReducer;
