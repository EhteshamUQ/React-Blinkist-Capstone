import SearchIcon from "../../atoms/searchIcon";
import Grid from "@mui/material/Grid";
import React, { MouseEventHandler } from "react";
import CustomAvatar from "../../atoms/avatar";
import Logo from "../../atoms/Logo";
import NavItems from "../../molecules/navlinks";
interface NavBarProps {
  isDrawerOpen?: boolean;
  onClickExplore?: MouseEventHandler;
}

const Navbar: React.FC<NavBarProps> = ({ isDrawerOpen, onClickExplore }) => {
  return (
    <header>
      <Grid container sx={{ padding: "23px 17% 0px" }}>
        <Grid item sx={{ marginRight: "42px" }}>
          <Logo />
        </Grid>
        <Grid item sx={{ marginRight: "42px" }}>
          <SearchIcon />
        </Grid>
        <Grid item sx={{ marginRight: "42px" }}>
          <NavItems
            title="Explore"
            dropdown
            isDrawerOpen={isDrawerOpen}
            onClick={onClickExplore}
          />
        </Grid>
        <Grid item marginRight={"50%"}>
          <NavItems title="My Library" />
        </Grid>
        <Grid item>
          <CustomAvatar letter={"A"} />
        </Grid>
      </Grid>
    </header>
  );
};

export default Navbar;
