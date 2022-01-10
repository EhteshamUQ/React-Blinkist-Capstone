import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import logo from "../../../images/logo.jpg";

const Logo = () => {
  const navigate = useNavigate();
  const StyledLogo = styled("img")({
    "&:hover": {
      cursor: "pointer",
    },
  });
  return (
    <StyledLogo
      src={logo}
      alt="Blinkist Logo"
      width={"99.1px"}
      height={"24px"}
      onClick={() => navigate("/")}
    />
  );
};

export default Logo;
