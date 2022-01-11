import { render, screen } from "@testing-library/react";
import FooterNavList from ".";

const items = ["Editorial", "useFUlLinks", "Career"];
const title = "Headings";

test("should render a list of Elements", () => {
  render(<FooterNavList title={title} items={items} />);
  const titleElement = screen.getByText(title);
  const itemsElements = screen.getAllByTestId("footerNavelement");
  expect(titleElement).toBeInTheDocument();
  expect(itemsElements.length).toBe(items.length);
});
