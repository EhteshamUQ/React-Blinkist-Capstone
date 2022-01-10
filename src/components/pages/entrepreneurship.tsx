import { Box } from "@mui/material";
import CategoryBookList from "../molecules/categoryBookList";
import SearchBar from "../molecules/searchBar";
import Banner from "../organisms/banner";
const EntrePage: React.FC = () => {
  const placeholderText = "Search by title or author";
  const titleBanner = "Explore Books on entrepreneurship";
  const titles = ["Trending Blinks", "Just Added", "Featured Audio Blinks"];
  const bookListsWithCategory = require("../../db.json")["entrePage"];
  const subtitle =
    "Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.";
  return (
    <Box marginTop={"5%"}>
      <Banner title={titleBanner} subtitle={subtitle} />
      <SearchBar placeholder={placeholderText} />
      {titles.map((title) => (
        <CategoryBookList
          title={title}
          bookList={bookListsWithCategory[title]}
        />
      ))}
    </Box>
  );
};

export default EntrePage;
