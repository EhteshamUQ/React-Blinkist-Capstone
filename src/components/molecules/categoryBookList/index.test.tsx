import { BrowserRouter } from "react-router-dom";
import CategoryBookList from ".";
import { render, screen } from "@testing-library/react";
import { title, bookList } from "./data";
const MockCategoryBookList = (
  <BrowserRouter>
    <CategoryBookList title={title} bookList={bookList} />
  </BrowserRouter>
);

test("Unit Test - Category Book list", () => {
  render(MockCategoryBookList);
  const titleTag = screen.getByText(title);
  const books = screen.getAllByTestId("bookCard");
  expect(titleTag).toBeInTheDocument();
  expect(books.length).toBe(bookList.length);
});
