import { BookType } from "../TabPanel/bookType";
const makeBookList = () => {
  const list: Array<BookType> = [];
  for (var i = 0; i < 10; i++) {
    list.push({
      title: "The Fault in our Stars",
      author: "me",
      readTime: "15",
      reads: "100",
      imagePath: "/images/3.png",
      owned: true,
    });
  }
  return list;
};

export const bookList = makeBookList();

export const title = "Trending Blinks";
