import { NavTypes } from "../types/types";

export const INITIAL_STATE = [
  { name: "Home", selected: true, path: "home", id: 1 },
  { name: "New Request", selected: false, path: "new-request", id: 2 },
  { name: "Recent Request", selected: false, path: "recent-request", id: 3 },
  { name: "All Request", selected: false, path: "all-request", id: 4 },
  { name: "Workflow", selected: false, path: "workflow", id: 5 },
];

const NavReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NavTypes.CHANGE_NAV:
      let newState = updateObjectInArray(state, action);
      return newState;
    default:
      return state;
  }
};

function updateObjectInArray(array, { id }) {
  return array.map((item, index) => {
    let newItem = null;
    if (item.id === id) {
      newItem = {
        ...item,
        selected: true,
      };
    } else {
      newItem = {
        ...item,
        selected: false,
      };
    }

    return newItem;
  });
}

export default NavReducer;
