import Banner from ".";
import { render, screen } from "@testing-library/react";

test("should Render Banner", () => {
  render(
    <Banner title="Entrepreneurship" subtitle="Books On Entrepreneurship" />
  );
  const title = screen.getByText("Entrepreneurship");
  const subTitle = screen.getByText(/Books On Entrepreneurship/i);
  expect(title).toBeInTheDocument();
  expect(subTitle).toBeInTheDocument();
});
