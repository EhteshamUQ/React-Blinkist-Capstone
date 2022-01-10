import React from "react";
import { Grid, Typography } from "@mui/material";
import TabBar from "../molecules/TabBar";
const LandingPage: React.FC = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
          variant="h1"
          sx={{ marginTop: "59px", marginLeft: "18%" }}
        >
          My Library
        </Typography>
      </Grid>
      <Grid item sx={{ marginTop: "59px", marginLeft: "18%" }}>
        <TabBar />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
