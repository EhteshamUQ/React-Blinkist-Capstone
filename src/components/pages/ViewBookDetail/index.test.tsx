import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ViewBookDetail from ".";

const MockDetails = (
  <MemoryRouter>
    <ViewBookDetail></ViewBookDetail>
  </MemoryRouter>
);

test("should Display Failure", () => {
  render(MockDetails);
  const msg = screen.getByText(/Unknown Error Occured , Book Not present/i);
  expect(msg).toBeInTheDocument();
});
