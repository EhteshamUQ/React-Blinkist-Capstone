import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BookCard from "../BookCard";
import { BookType } from "../TabPanel/bookType";
interface CategoryBookListProps {
  title: string;
  bookList: BookType[];
}

const CategoryBookList: React.FC<CategoryBookListProps> = ({
  title,
  bookList,
}) => {
  const navigator = useNavigate();
  const boxStyling = {
    margin: "5% 18.5% 5% 18.5%",
    padding: " 0%",
  };
  const OnClick = (bookTitle: string) => {
    navigator("/bookView/" + bookTitle);
  };
  return (
    <Box sx={boxStyling}>
      <Typography variant="h3" marginBottom={"30px"}>
        {title}
      </Typography>
      <Grid container>
        {bookList.map((book) => (
          <Grid item xs={4} marginBottom={"5%"}>
            <BookCard {...book} onClick={OnClick} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryBookList;
