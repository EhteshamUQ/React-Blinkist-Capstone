import { render, screen } from "@testing-library/react";
import Avatar from ".";

it("Unit Test - Avatar", () => {
  render(<Avatar letter="A" />);
  const letter = screen.getByText(/A/i);
  expect(letter).toBeInTheDocument();
});
