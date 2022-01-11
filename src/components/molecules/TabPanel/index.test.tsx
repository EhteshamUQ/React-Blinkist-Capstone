import { render, screen } from "@testing-library/react";
import TabPanel from ".";

test("should display Books", () => {
  render(<TabPanel />);
  const bookCards = screen.getAllByTestId(/bookCard/i);
  expect(bookCards.length).toBe(9);
});

