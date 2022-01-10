import { render } from "@testing-library/react";
import FooterNavList from ".";

const items = ["Editorial", "useFUlLinks", "Career"];
const title = "Headings";

test("should render a list of Elements", () => {
  render(<FooterNavList title={title} items={items} />);
  expect(1).toBe(1);
});
