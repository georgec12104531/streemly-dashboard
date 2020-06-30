import React from "react";
import { render } from "@testing-library/react";
import Title from "./title.component.jsx";

test("renders title prop in header link", () => {
  const { getByText } = render(<Title title={"Test Title"} subTitle={"Test Subtitle"} />);
  const title = getByText(/Test Title/i);
  const subTitle = getByText(/Test Subtitle/i);
  expect(title).toBeInTheDocument();
  expect(subTitle).toBeInTheDocument();
});
