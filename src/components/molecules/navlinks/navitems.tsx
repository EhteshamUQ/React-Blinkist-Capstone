import React from "react";
import {styled} from "@mui/system";
import { Typography } from "@mui/material";

interface NavItemsProps {
  title?: string;
  dropdown?: boolean;
}

const NavItems: React.FC<NavItemsProps> = ({ title, dropdown }) => {
  const styledDiv = styled("div")({
      display:"flex",
      
  });
  return (
    <div>
      <Typography variant="body2">{title}</Typography>
      {dropdown == true ? <></> : null}
    </div>
  );
};

export default NavItems;
