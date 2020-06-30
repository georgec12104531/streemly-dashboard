import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import Panel from "./panel.component.jsx";

test("renders title prop in header link", () => {
  const getById = queryByAttribute.bind(null, "id");
  let mock = [
    { id: 100, label: "Approved", count: 21, color: "green" },
    { id: 101, label: "Pending", count: 22, color: "orange" },
    { id: 102, label: "Rejected", count: 23, color: "red" },
  ];
  const { getByText, container } = render(<Panel data={mock} />);

  getByText("Approved", { exact: true });
  getByText("21", { exact: true });

  getByText("Pending", { exact: true });
  getByText("22", { exact: true });

  getByText("Rejected", { exact: true });
  getByText("23", { exact: true });
});
