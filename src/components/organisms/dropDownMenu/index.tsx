import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { MouseEventHandler } from "react";
import IconTitle from "../../molecules/IconTitle";

interface dropDownMenuProps {
  icons: any[];
  titles: Array<string>;
  onClick: MouseEventHandler;
}

const DropDownMenu: React.FC<dropDownMenuProps> = ({
  icons,
  titles,
  onClick,
}) => {
  const boxStyling = {
    height: "400px",
    padding: "0px 250px",
    backgroundColor: "white",
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
    <Grid container>
      <Grid item xs>
        <Typography variant="subtitle1" color="secondary.color">
          Explore by category
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="body1">See recently added titles</Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="body1">See popular titles</Typography>
      </Grid>
    </Grid>
  );

  const iconTitleLists = (
    <Grid container>
      {icons?.map((icon, index) => (
        <Grid item xs={4} margin={"12px 0px"}>
          <IconTitle icon={icon} title={titles[index]} onClick={onClick} />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <StyledDiv>
      <Box sx={boxStyling}>
        <Grid container>{headings}</Grid>
        <hr />
        {iconTitleLists}
      </Box>
      <div className="bg"></div>
    </StyledDiv>
  );
};

export default DropDownMenu;
