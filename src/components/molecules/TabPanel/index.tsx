import { Box, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../BookCard";
import { BookType } from "./bookType";
interface TabPanelProps {
  value?: number;
}
interface BookTypeExt extends BookType {
  id?: string;
}

const TabPanel: React.FC<TabPanelProps> = ({ value }) => {
  const landingBooks = require("../../../db.json");
  const books: BookType[] = landingBooks["landingBooks"];
  const [finishedBooks, setFinishedBooks] = useState<BookTypeExt[]>();
  useEffect(() => {
    async function getData() {
      const booksFromServer = await axios
        .get("http://localhost:3001/finished")
        .then((response) => response.data);
      return booksFromServer as BookTypeExt[];
    }
    getData()
      .then((res) => setFinishedBooks(res))
      .catch((reject) => console.log(reject));
  }, []);
  return (
    <Grid container marginBottom={"15%"} marginRight={"18%"}>
      <Box display={value === 0 ? "block" : "none"}>
        <Grid container>
          {books.map((book) => (
            <Grid item xs={3.2} margin={"25px 0px 0px 0px"}>
              <BookCard {...book} owned onClick={() => null} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        display={value === 1 ? "block" : "none"}
        marginBottom={value === 1 ? "20%" : "0"}
      >
        <Grid container sx={{ marginTop: "10%" }}>
          {finishedBooks !== null && finishedBooks !== undefined
            ? finishedBooks.map((book) => (
                <BookCard
                  title={book["title"]}
                  owned={book["owned"]}
                  imagePath={book["imagePath"]}
                  reads={book["reads"]}
                  readTime={book["readTime"]}
                  onClick={() => null}
                  author={book["author"]}
                  percentComplete={100}
                />
              ))
            : null}
        </Grid>
      </Box>
    </Grid>
  );
};

export default TabPanel;
