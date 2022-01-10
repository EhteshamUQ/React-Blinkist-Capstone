import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import rightIcon from "../../atoms/rightIcon/rightIcon";
import TypographyBody1 from "../../organisms/bookDetails/TypographyBody1";

interface ButtonGridProps {
  completed?: boolean;
  onClickFinished: Function;
}
const ButtonGrid: React.FC<ButtonGridProps> = ({
  completed,
  onClickFinished,
}) => {
  const navigate = useNavigate();
  return (
    <Grid container marginTop={"20%"}>
      <Button
        variant="outlined"
        sx={{
          border: "1px solid #042330",
          marginRight: "5%",
          textTransform: "none",
          padding: "2% 3% 2% 3%",
        }}
      >
        <TypographyBody1 title="Read Now" />
      </Button>
      {completed === true ? (
        <TypographyBody1 title="Completed"></TypographyBody1>
      ) : (
        <Button
          variant="contained"
          sx={{
            marginRight: "5%",
            textTransform: "none",
            padding: "2% 3% 2% 3%",
          }}
          onClick={(e: React.MouseEvent) => {
            onClickFinished();
            navigate("/");
          }}
        >
          <TypographyBody1 title="Finished Reading" />
        </Button>
      )}
      <Button variant="text">
        <Typography variant="body2" color="textColors.textColor3">
          Send to Kindle {rightIcon}
        </Typography>
      </Button>
    </Grid>
  );
};

export default ButtonGrid;
