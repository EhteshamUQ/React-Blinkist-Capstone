import {
  Box,
  Divider,
  Grid,
  Stack,
  SxProps,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import IconWithText from "../../atoms/iconWIthText";
import ButtonGrid from "../../molecules/ButtonGrid";
import timeIcon from "../../atoms/rightIcon/timeIcon";

interface BookDetailsProps {
  title?: string;
  subtitle?: string;
  readTime: string;
  imagePath?: string;
  author?: string;
  synopsis?: string;
  completed?: boolean;
  onClickFinish: Function;
}
const cssRules = {
  height: "39px",
  width: "200px",
  alignItems: "flex-start",
  padding: "0",
  marginTop: "58px",
};

const BookDetails: React.FC<BookDetailsProps> = ({
  title,
  subtitle,
  readTime,
  imagePath,
  author,
  synopsis,
  onClickFinish,
  completed,
}) => {
  const BoxStyling: SxProps = {
    margin: "5% 10% 18% 18.5%",
  };

  const Texts = (
    <>
      <Typography variant="body2" marginBottom={"3.75%"}>
        Get the key Ideas from
      </Typography>
      <Typography variant="h1" marginBottom={"3%"}>
        {title}
      </Typography>
      <Typography variant="subtitle3" marginBottom={"3%"}>
        {subtitle}
      </Typography>
      <Typography
        variant="body1"
        marginBottom={"3%"}
        color="textColors.textColor3"
      >
        {author}
      </Typography>
    </>
  );

  return (
    <Box sx={BoxStyling}>
      <Grid container>
        <Grid item>
          <Stack>
            {Texts}
            <IconWithText
              children={timeIcon}
              title={readTime + "-minute read"}
            />
            <ButtonGrid completed={completed} onClickFinished={onClickFinish} />
          </Stack>
        </Grid>
        <Grid item xs margin={"40px 0px 0px 125px"}>
          <img
            src={imagePath}
            alt={title + " image"}
            width={"304px"}
            height={"304px"}
          />
        </Grid>
      </Grid>
      <Box>
        <Tabs value={0} textColor="inherit">
          <Tab label="Synopsis" sx={cssRules} />
          <Tab label="Who is it for?" sx={cssRules} />
          <Tab label="About the Author" sx={cssRules} />
        </Tabs>
      </Box>
      <Typography
        variant="body2"
        sx={{ lineHeight: "20.11px", width: "600px", marginTop: "20px" }}
      >
        {synopsis}
      </Typography>
      <Divider
        sx={{
          margin: "15% 25% 0px 0",
          borderColor: "greyScale.progress",
        }}
      />
    </Box>
  );
};
export default BookDetails;
