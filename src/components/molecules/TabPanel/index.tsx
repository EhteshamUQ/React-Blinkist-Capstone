import { Grid } from "@mui/material";
import React from "react";
import BookCard from "../BookCard";
interface TabPanelProps {
  value?: number;
  index?: number;
}
interface bookType {
  title?: string;
  author?: string;
  readTime?: string;
  reads?: string;
  imagePath: string;
}
const TabPanel: React.FC<TabPanelProps> = ({ value, index }) => {
  const landingBooks = require("../../../db.json");
  const books: bookType[] = landingBooks["landingBooks"];
  return (
    <Grid container sx={{ marginBottom: "111px" }}>
      {books.map((book) => (
        <Grid item xs={3.3} margin={"25px 0px"}>
          <BookCard {...book} owned />
        </Grid>
      ))}
    </Grid>
  );
};

export default TabPanel;
