import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ButtonGrid from ".";

const MockButtonGrid = () => (
  <BrowserRouter>
    <ButtonGrid onClickFinished={() => null} />
  </BrowserRouter>
);

test("should Generate 3 Buttons - Unit Test", () => {
  render(<MockButtonGrid />);
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(3);
});
