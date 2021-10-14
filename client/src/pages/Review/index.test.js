import { fireEvent, render, screen } from "@testing-library/react";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Profile from "./index";

test("renders learn react link", () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <Profile />
    </Router>
  );
  expect(screen.getByText(/Add your review!/i)).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("submit-btn"));
});
