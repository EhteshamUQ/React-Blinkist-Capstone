import { render, screen } from "@testing-library/react";
import SloganLogo from ".";

test("should display Sloganlogo", () => {
  render(<SloganLogo title="Slogan" />);
  const img = screen.getByTestId("img");
  const title = screen.getByText(/Slogan/i);
  expect(img).toHaveAttribute("src");
  expect(title).toBeInTheDocument();
});
