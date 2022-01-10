import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import BookDetails from "../../organisms/bookDetails";

const ViewBookDetail: React.FC = () => {
  window.scrollTo(0, 0);
  const { bookName } = useParams<{ bookName: string }>();
  const books = require("../../../db.json");
  if (bookName === undefined) {
    return (
      <Typography variant="h1">
        Unknown Error Occured , Book Not present
      </Typography>
    );
  }
  const bookInfo = books[bookName];
  if (bookInfo == null) {
    return <Typography variant="h1">404 Book not Found</Typography>;
  }
  const onFinishedClick = async () => {
    const axios = require("axios").default;
    const book = {
      title: bookInfo["title"],
      reads: bookInfo["reads"],
      readTime: bookInfo["readTime"],
      author: bookInfo["author"],
      imagePath: bookInfo["imagePath"],
      owned: true,
      id: bookInfo["title"],
    };
    await axios
      .post("http://localhost:3001/finished", book)
      .then(() => {
        console.log("added");
      })
      .catch(() => {
        console.log("Cannot Add ,Already Present");
      });
  };

  return <BookDetails {...bookInfo} onClickFinish={onFinishedClick} />;
};

export default ViewBookDetail;
