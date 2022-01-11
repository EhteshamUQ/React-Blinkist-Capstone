import { titles, subtitlesList } from "./titles";
import FooterNavLists from ".";
import { render, screen } from "@testing-library/react";

test("should Display Footer Lists", () => {
  render(<FooterNavLists titles={titles} itemLists={subtitlesList} />);
  const titlesList = screen.getAllByTestId(/titleElement/i);
  const subTitles = screen.getAllByTestId(/footerNavelement/i);
  expect(titlesList.length).toBe(titles.length);
  expect(subTitles.length).toBe(13);
});
