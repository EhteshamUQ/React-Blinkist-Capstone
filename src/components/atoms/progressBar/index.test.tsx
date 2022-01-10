import { render, screen } from "@testing-library/react";
import ProgressBar from ".";
it("Unit Test - Progress Bar", () => {
  render(<ProgressBar percentComplete={20} />);
  const divs = screen.getAllByTestId("div");
  expect(divs.length).toBe(2);
});
