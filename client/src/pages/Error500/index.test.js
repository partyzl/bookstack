import { render, screen } from "@testing-library/react";
import Error500 from "./index";

test("renders error 500 page", () => {
  render(<Error500 />);
  expect(
    screen.getByText(
      /We are having some server issues our end! Please check back later/i
    )
  ).toBeInTheDocument();
});
