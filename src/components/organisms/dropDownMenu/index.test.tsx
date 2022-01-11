import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DropDownMenu from ".";
import { icons, titles } from "../../icons/icons";

const MockDropDown = (
  <MemoryRouter>
    <DropDownMenu icons={icons} titles={titles} toggleDrawer={() => null} />
  </MemoryRouter>
);

test("should Display DropDown menu", () => {
  render(MockDropDown);
  const dropDownItems = screen.getAllByTestId("dropdownitem");
  expect(dropDownItems.length).toBe(icons.length);
});
