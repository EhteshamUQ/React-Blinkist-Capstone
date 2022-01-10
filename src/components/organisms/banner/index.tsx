import { Box, Grid, Typography } from "@mui/material";
import ReadingBanner from "../../atoms/readingBanner";

interface BannerProps {
  title?: string;
  subtitle?: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
  return (
    <Box
      margin={"0% 18% 0%"}
      sx={{
        backgroundColor: "backgroundColors.background2",
        width: "58%",
        height: "263px",
        padding: " 0% 5%",
      }}
    >
      <Grid container>
        <Grid item xs>
          <Typography variant="h1" paddingTop="5%" width={"40%"}>
            {title}
          </Typography>
          <Typography variant="subtitle2" width="62.5%" marginRight={"12%"}>
            {subtitle}
          </Typography>
        </Grid>
        <Grid item>
          <ReadingBanner />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
