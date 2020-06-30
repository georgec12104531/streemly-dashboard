import React from "react";
import { render } from "@testing-library/react";
import Header from "./header.component.jsx";

test("renders title prop in header link", () => {
  const { getByText } = render(<Header title={"Test Title"} />);
  const linkElement = getByText(/Test Title/i);
  expect(linkElement).toBeInTheDocument();
});
