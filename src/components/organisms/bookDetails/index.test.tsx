import BookDetails from ".";
import { render, screen } from "@testing-library/react";
import { argz } from "./index.stories";
import { MemoryRouter } from "react-router-dom";
test("should display Book Details", () => {
  render(
    <MemoryRouter>
      <BookDetails {...argz} onClickFinish={() => null} />
    </MemoryRouter>
  );
  const title = screen.getByText(argz["title"]);
  const synopsis = screen.getByText(argz["synopsis"]);
  const synopsisTab = screen.getByText(/Synopsis/i);
  expect(title).toBeInTheDocument();
  expect(synopsis).toBeInTheDocument();
  expect(synopsisTab).toBeInTheDocument();
});
