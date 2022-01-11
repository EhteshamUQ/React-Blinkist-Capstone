import { screen, render } from "@testing-library/react";
import SearchBar from ".";

test("should display Search Bar", () => {
  render(<SearchBar placeholder="Search" />);
  const placeholderElement = screen.getByPlaceholderText(/Search/i);
  expect(placeholderElement).toBeInTheDocument();
});
