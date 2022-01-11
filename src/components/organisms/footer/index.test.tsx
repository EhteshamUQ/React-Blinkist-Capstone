import { render, screen } from "@testing-library/react";
import Footer from ".";
test("should Display Footer", () => {
  render(<Footer />);
  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});
