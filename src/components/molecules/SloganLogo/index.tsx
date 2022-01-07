import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Logo from "../../../images/logo.jpg";
interface SloganLogoProps {
  title?: string;
}

const SloganLogo: React.FC<SloganLogoProps> = ({ title }) => {
  const StyledDiv = styled("div")({
    display: "flex",
    flexDirection: "column",
    height: "120px",
    padding: "0px",
    justifyContent: "space-between",
    alignItems: "flex-start",
    img: {
      width: "99.1px",
      height: "24px",
    },
    boxSizing: "border-box",
  });

  return (
    <StyledDiv>
      <img src={Logo} alt="Logo" />
      <Typography variant="subtitle1" color="secondary.color" sx = {{width:"378px"}}>
        {title}
      </Typography>
    </StyledDiv>
  );
};
export default SloganLogo;
