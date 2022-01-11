import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
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
        <Typography variant="body1" data-testid="titleElement">
          {title}
        </Typography>
      </Grid>
      {items?.map((item) => (
        <Grid item>
          <Typography variant="body2" data-testid="footerNavelement">
            {item}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default FooterNavList;
