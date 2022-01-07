import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { FiMoreHorizontal } from "react-icons/fi";
import AddIcon from "@mui/icons-material/Add";

interface BookCardProps {
  imagePath: string;
  title?: string;
  author?: string;
  readTime?: string;
  reads?: string;
  owned?: boolean;
}

const BookCard = ({
  imagePath,
  title,
  author,
  readTime,
  reads,
  owned,
}: BookCardProps) => {
  return (
    <Card sx={{ height: "535px", width: "343px" }}>
      <CardMedia component="img" src={imagePath} alt="Book Image" />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Grid container direction={"column"}>
          <Typography variant="subtitle1" paddingTop={"14px"}>
            {title}
          </Typography>
          <Typography variant="body1" paddingTop={"7px"}>
            {author}
          </Typography>
          <Grid
            container
            justifyContent={"space-between"}
            alignContent={"start"}
          >
            <Grid item alignContent={"center"} paddingTop={"15px"} xs>
              <AccessTimeIcon fontSize="inherit" />
              <Typography variant="caption">{readTime}-minute read</Typography>
            </Grid>
            {reads !== undefined && reads !== null ? (
              <Grid item paddingTop={"15px"}>
                <PersonOutlineOutlinedIcon fontSize="inherit" />
                <Typography variant="caption">{reads}k reads</Typography>
              </Grid>
            ) : null}
            {owned !== undefined && owned === true ? (
              <Grid container justifyContent={"end"}>
                <FiMoreHorizontal fontSize={"medium"} />
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </CardContent>
      {owned === true ? (
        <Grid
          container
          padding={"0px"}
          sx={{
            backgroundColor: "#F1F6F4",
            height: "24px",
            margin: "10px 0px 0px 0px",
          }}
        >
          <Grid item xs={3} sx={{ backgroundColor: "#E1ECFC" }}></Grid>
        </Grid>
      ) : (
        <div>
          <hr />
          <Button
            sx={{
              height: "40px",
              margin: "0px 0px 0px 0px",
              alignContent: "center",
              width: "100%",
              color: "secondary.color",
              "&:hover": {
                backgroundColor: "secondary.color",
                color: "white",
              },
            }}
          >
            <AddIcon fontSize="medium" />
            <Typography variant="body1"> Add to My Library</Typography>
          </Button>
        </div>
      )}
    </Card>
  );
};

export default BookCard;
