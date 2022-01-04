import { Card, CardActions, CardMedia, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
interface BookCardProps {
  imagePath: string;
  title: string;
  author: string;
  readTime: string;
  reads?: string;
}

const BookCard = ({
  imagePath,
  title,
  author,
  readTime,
  reads,
}: BookCardProps) => {
  return (
    <Card sx={{ height: "466px", width: "284px" }}>
      <CardMedia
        component="img"
        image={imagePath}
        width={"284px"}
        height={"282px"}
        alt="Book Image"
      />
      <CardContent>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="subtitle1">{author}</Typography>
        <div>
          <div>
            <AccessTimeIcon fontSize="small" />
            <Typography variant="caption">{readTime}-minute read</Typography>
          </div>
          {reads !== undefined ? (
            <div>
              <PersonOutlineOutlinedIcon fontSize="small" />
              <Typography variant="caption">{reads}k reads</Typography>
            </div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
