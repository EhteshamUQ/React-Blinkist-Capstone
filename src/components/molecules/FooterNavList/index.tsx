import { Grid } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/system";
interface FooterNavListProps {
  title?: string;
  items?: Array<string>;
}
const FooterNavList: React.FC<FooterNavListProps> = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={theme.spacing(2)}
      alignItems="flex-start"
      direction="column"
    >
      <Grid item>
        <Typography variant="body1">{title}</Typography>
      </Grid>
      {items?.map((item) => (
        <Grid item>
          <Typography variant="body2">{item}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default FooterNavList;
