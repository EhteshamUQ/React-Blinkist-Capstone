import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from ".";
const MockNavBar = (
  <MemoryRouter>
    <Navbar />
  </MemoryRouter>
);
test("should Display Navbar", () => {
  render(MockNavBar);
  const nav = screen.getByTestId("navbar");
  expect(nav).toBeInTheDocument();
});
