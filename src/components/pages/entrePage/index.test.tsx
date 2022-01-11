import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EntrePage from ".";
const MockPage = (
  <MemoryRouter>
    <EntrePage />
  </MemoryRouter>
);

test("should Display EntrePage", () => {
  render(MockPage);
  const page = screen.getByTestId("EntrePage");
  expect(page).toBeInTheDocument();
});
