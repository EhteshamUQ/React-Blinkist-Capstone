
import { Avatar as MUIAvatar } from "@mui/material";

interface AvatarProps {
  letter: string;
}

const Avatar: React.FC<AvatarProps> = ({ letter }) => {
  return <MUIAvatar>{letter}</MUIAvatar>;
};
