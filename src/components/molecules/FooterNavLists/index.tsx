import { Grid } from "@mui/material";
import React from "react";
import FooterNavList from "../FooterNavList";
interface FooterNavListsProps {
  titles: Array<string>;
  itemLists: Array<Array<string>>;
}

const FooterNavLists: React.FC<FooterNavListsProps> = ({
  titles,
  itemLists,
}) => {
  return (
    <Grid container sx={{ width: "800px", height: "224px" }}>
      {itemLists?.map((items, index) => (
        <Grid item xs sx={{ margin: "0px 50px" }}>
          <FooterNavList title={titles[index]} items={items} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FooterNavLists;
