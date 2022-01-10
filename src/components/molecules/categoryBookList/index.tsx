import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BookCard from "../BookCard";
import { bookType } from "../TabPanel/bookType";
interface CategoryBookListProps {
  title: string;
  bookList: bookType[];
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
  const OnClick = (title: string) => {
    navigator("/bookView/" + title);
  };
  return (
    <Box sx={boxStyling}>
      <Typography variant="h3" marginBottom={"30px"}>
        {title}
      </Typography>
      <Grid container>
        {bookList.map((book) => (
          <Grid item xs={3.5} marginBottom={"5%"}>
            <BookCard {...book} onClick={OnClick} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryBookList;
