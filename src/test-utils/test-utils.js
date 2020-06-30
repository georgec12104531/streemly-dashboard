// test-utils.js
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { INITIAL_STATE as initalState } from "../redux/reducers/nav-reducer";

import rootReducer from "../redux/reducers/root-reducer";

function render(
  component,
  { initialState = initalState, store = createStore(rootReducer) } = {}
) {
  return { ...rtlRender(<Provider store={store}>{component}</Provider>) };
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
