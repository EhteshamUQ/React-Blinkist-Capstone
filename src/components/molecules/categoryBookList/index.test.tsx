import { BrowserRouter } from "react-router-dom";
import CategoryBookList from ".";
import { render, screen } from "@testing-library/react";

const title = "Trending Blinks";
const bookList = [
  {
    title: "The Fault in our Stars",
    author: "me",
    readTime: "15",
    reads: "100",
    imagePath: "/images/3.png",
    owned: true,
  },
  {
    title: "The Fault in our Stars",
    author: "me",
    readTime: "15",
    reads: "100",
    imagePath: "/images/3.png",
    owned: true,
  },
  {
    title: "The Fault in our Stars",
    author: "me",
    readTime: "15",
    reads: "100",
    imagePath: "/images/3.png",
    owned: true,
  },
  {
    title: "The Fault in our Stars",
    author: "me",
    readTime: "15",
    reads: "100",
    imagePath: "/images/3.png",
    owned: true,
  },
  {
    title: "The Fault in our Stars",
    author: "me",
    readTime: "15",
    reads: "100",
    imagePath: "/images/3.png",
    owned: true,
  },
  {
    title: "The Fault in our Stars",
    author: "me",
    readTime: "15",
    reads: "100",
    imagePath: "/images/3.png",
    owned: true,
  },
  {
    title: "The Fault in our Stars",
    author: "me",
    readTime: "15",
    reads: "100",
    imagePath: "/images/3.png",
    owned: true,
  },
];
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
