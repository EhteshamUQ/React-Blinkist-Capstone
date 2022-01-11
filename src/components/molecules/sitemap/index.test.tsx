import { render, screen } from "@testing-library/react";
import SiteMap from ".";
test("should display SiteMap", () => {
  render(<SiteMap />);
  const textItem = screen.queryByText("Privacy Policies");
  const tItem = screen.getByText(/Terms of Service/i);
  expect(textItem).toBeInTheDocument();
  expect(tItem).toBeInTheDocument();
});
