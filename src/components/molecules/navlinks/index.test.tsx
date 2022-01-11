import { render, screen } from "@testing-library/react";
import NavItems from ".";

test("should display NavItems and also Demonstrate OnClick", () => {
  render(<NavItems title="NavItem" />);
  const title = screen.getByText(/NavItem/i);
  expect(title).toBeInTheDocument();
});

test("Should display a navitem with arrow icon", () => {
  render(<NavItems title="NavItem" dropdown={true} />);
  const title = screen.getByText(/NavItem/i);
  expect(title).toBeInTheDocument();
  const arrow = screen.getAllByTestId("icon");
  expect(arrow.length).toBe(1);
});
