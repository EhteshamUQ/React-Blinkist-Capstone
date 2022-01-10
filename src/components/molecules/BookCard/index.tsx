import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  SxProps,
  Typography,
} from "@mui/material";
import { FiMoreHorizontal } from "react-icons/fi";
import IconWithText from "../../atoms/iconWIthText";
import ProgressBar from "../../atoms/progressBar";
import PersonIcon from "../../icons/personIcon";
import TimeIcon from "../../atoms/timeIcon";
const plusIcon = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 11V5H13.5V11H19.5V13H13.5V19H11.5V13H5.5V11H11.5Z"
      fill="#0365F2"
    />
  </svg>
);

interface BookCardProps {
  imagePath: string;
  title?: string;
  author?: string;
  readTime?: string;
  reads?: string;
  owned?: boolean;
  onClick: Function;
  percentComplete?: number;
}

const BookCard = ({
  imagePath,
  title,
  author,
  readTime,
  reads,
  owned,
  onClick,
  percentComplete,
}: BookCardProps) => {
  const ButtonStyling: SxProps = {
    position: "relative",
    top: "10px",
    width: "100%",
    height: "11%",
    color: "secondary.main",
    borderColor: "#e1ecfc",
    "&:hover": {
      backgroundColor: "secondary.main",
      alignItems: "center",
      color: "white",
      path: {
        fill: "white",
      },
    },
  };

  const CardContentStyling: SxProps = {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 0,
  };
  return (
    <Card sx={{ height: "466px", width: "284px" }}>
      <CardMedia
        component="img"
        src={imagePath}
        alt="Book Image"
        height={"282px"}
      />
      <CardContent sx={CardContentStyling}>
        <Grid container direction={"column"} padding="0" margin="0">
          <Typography variant="subtitle2" margin={"5% 0px 0px"}>
            {title}
          </Typography>
          <Typography
            variant="body1"
            paddingTop={"5%"}
            sx={{ color: "textColors.textColor3" }}
          >
            {author}
          </Typography>
          <Grid
            container
            justifyContent={"space-between"}
            alignContent={"start"}
            paddingTop={"5%"}
          >
            <Grid item xs={7.5}>
              <IconWithText
                title={readTime + "-minute read"}
                children={TimeIcon}
              />
            </Grid>
            {reads !== undefined && reads !== null ? (
              <Grid item xs>
                <IconWithText title={reads + "k reads"} children={PersonIcon} />
              </Grid>
            ) : null}
            {owned !== undefined && owned === true ? (
              <Grid
                container
                justifyContent={"end"}
                marginRight={"5%"}
                marginTop={"5%"}
              >
                <FiMoreHorizontal fontSize={"medium"} />
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </CardContent>
      {owned === true && owned !== undefined ? (
        <Grid container padding={"0px"} top={"15px"} position={"relative"}>
          <ProgressBar percentComplete={percentComplete} />
        </Grid>
      ) : (
        <Button
          variant="outlined"
          sx={ButtonStyling}
          onClick={() => onClick(title)}
        >
          {plusIcon}{" "}
          <Typography variant="body1" padding={"4px 0px 0px 4px"}>
            Add to Library
          </Typography>
        </Button>
      )}
    </Card>
  );
};

export default BookCard;
