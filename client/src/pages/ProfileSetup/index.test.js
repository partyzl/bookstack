import { fireEvent, render, screen } from "@testing-library/react";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import ProfileSetup from "./index";

test("renders learn react link", () => {
  render(<ProfileSetup />);
  expect(screen.getByText(/Profile Setup/i)).toBeInTheDocument();
});

test("renders learn clickable link", () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <ProfileSetup />
    </Router>
  );
  const nextButton = screen.getByTestId("submit-btn");
  fireEvent.click(nextButton);
  expect(history.location.pathname).toBe("/profilelanding");
});
