import { fireEvent, render, screen } from "@testing-library/react";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import CurrentReads from "./index";

test("renders learn react link", () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <CurrentReads />
    </Router>
  );
  expect(screen.getByText(/Current reads/i)).toBeInTheDocument();
});
