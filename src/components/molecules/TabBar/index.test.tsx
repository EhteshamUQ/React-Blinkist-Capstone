import { render, screen } from "@testing-library/react";
import TabBar from ".";

test("should Display Tab Bar", () => {
  render(<TabBar />);
  const Currently = screen.getByText(/Currently reading/i);
  const finished = screen.getByText(/Finished/i);

  expect(Currently).toBeInTheDocument();
  expect(finished).toBeInTheDocument();
});
