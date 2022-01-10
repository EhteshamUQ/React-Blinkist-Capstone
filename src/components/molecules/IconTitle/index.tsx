import { Grid, useTheme, Typography } from "@mui/material";
import React, { MouseEventHandler } from "react";

interface IconTitleProps {
  icon?: any;
  title?: string;
  onClick: MouseEventHandler;
}

const IconTitle: React.FC<IconTitleProps> = ({ icon, title, onClick }) => {
  const theme = useTheme();
  const style = {
    "&:hover": {
      cursor: "pointer",
      color: "secondary.color",
      path: {
        fill: "blue" ,
      },
      ".text": {
        "userSelect": "none",
      },
    },
  };
  return (
    <Grid
      container
      spacing={theme.spacing(2)}
      alignItems={"center"}
      sx={style}
      onClick={onClick}
    >
      <Grid item className="icon">{icon}</Grid>
      <Grid item>
        <Typography variant="body2" className="text">
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default IconTitle;
