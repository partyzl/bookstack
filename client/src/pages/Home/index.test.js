import { fireEvent, render, screen } from "@testing-library/react";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Home from "./index";

test("renders learn react link", () => {
  render(<Home />);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
  expect(screen.getByText(/Register/i)).toBeInTheDocument();
});

test("renders learn clickable link", () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <Home />
    </Router>
  );
  const loginButton = screen.getByText(/Login/i);
  fireEvent.click(loginButton);
  expect(history.location.pathname).toBe("/login");
});
