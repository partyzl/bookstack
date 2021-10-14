import { fireEvent, render, screen } from "@testing-library/react";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import CompletedReads from "./index";

test("renders learn react link", () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <CompletedReads />
    </Router>
  );
  expect(screen.getByText(/Completed books/i)).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("submit-btn"));
});
