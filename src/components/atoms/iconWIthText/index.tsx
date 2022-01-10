import { Grid, Typography } from "@mui/material";

interface IconWithTextProps {
  title: string;
}

const IconWithText: React.FC<IconWithTextProps> = ({ title, children }) => {
  return (
    <Grid container alignItems={"center"} justifyContent={"flex-start"}>
      {children}
      <Typography
        variant="caption3"
        paddingLeft={"0.5%"}
        color={"textColors.textColor3"}
      >
        {title}
      </Typography>
    </Grid>
  );
};
export default IconWithText;
