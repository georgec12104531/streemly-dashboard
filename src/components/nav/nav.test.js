import React from "react";
import { render, getByText } from "../../test-utils/test-utils";
import { createStore } from "redux";
import Nav from "./nav.component.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

// afterEach(cleanup);

it("renders with redux", () => {
  const { getByText } = render(
    <Router>
      <Nav />
    </Router>
  );

  getByText("Home", { exact: true });
  getByText("New Request", { exact: true });
  getByText("Recent Request", { exact: true });
  getByText("All Request", { exact: true });
  getByText("Workflow", { exact: true });
});
