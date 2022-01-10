import { Box, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import IconTitle from "../../molecules/IconTitle";
import { useNavigate } from "react-router-dom";
interface DropDownMenuProps {
  icons: any[];
  titles: Array<string>;
  toggleDrawer: Function;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  icons,
  titles,
  toggleDrawer,
}) => {
  const navigator = useNavigate();
  const boxStyling = {
    height: "400px",
    padding: "0px 25% 0% 20%",
    backgroundColor: "backgroundColors.background2",
    zIndex: 2,
  };
  const StyledDiv = styled("div")({
    top: "86px",
    backgroundColor: "rgba(157, 163, 166 , 0.5)",
    height: "285vh",
    padding: "0px",
    zIndex: 1,
    position: "absolute",
  });

  const headings = (
    <Grid container padding={"30px 0px 15px"}>
      <Grid item xs>
        <Typography variant="subtitle3" color="secondary.color" >
          Explore by category
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="body1" color="textColors.textColor3">See recently added titles</Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="body1" color="textColors.textColor3">See popular titles</Typography>
      </Grid>
    </Grid>
  );

  const iconTitleLists = (
    <Grid container marginTop={"15px"}>
      {icons?.map((icon, index) => {
        const onClick = () => {
          navigator("/" + titles[index]);
          toggleDrawer();
        };
        return (
          <Grid item xs={4} margin={"12px 0px"}>
            <IconTitle icon={icon} title={titles[index]} onClick={onClick} />
          </Grid>
        );
      })}
    </Grid>
  );

  return (
    <StyledDiv>
      <Box sx={boxStyling}>
        {headings}
        <Divider/>
        {iconTitleLists}
      </Box>
      <div className="bg"></div>
    </StyledDiv>
  );
};

export default DropDownMenu;
