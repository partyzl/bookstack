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
  expect(screen.getByText(/got any new reads/i)).toBeInTheDocument();
});

test("renders learn clickable link", () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <Profile />
    </Router>
  );
  const nextButton = screen.getByTestId("submit-btn");
  fireEvent.click(nextButton);
  expect(history.location.pathname).toBe("/profilesetup");
});
