import { fireEvent, render, screen } from "@testing-library/react";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Stats from "./index";

test("renders learn react link", () => {
  render(<Stats />);
  expect(screen.getByText(/my stats/i)).toBeInTheDocument();
});
