import { Typography } from "@mui/material";

const TypographyBody1: React.FC<any> = ({ title }) => {
  return (
    <Typography variant="body1" sx={{ fontWeight: "500" }}>
      {title}
    </Typography>
  );
};
export default TypographyBody1;
