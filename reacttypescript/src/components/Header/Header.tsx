import { Button } from "@mui/material";
import { FC } from "react";

interface IHeaderProps {
  buttonText?: string;
  onClick?: () => void;
}
const Header: FC<IHeaderProps> = ({ children, buttonText = 'lol' , onClick }) => {
  return (
    <h1>
      {children}
      <Button variant="contained" onClick={onClick}>{buttonText}</Button>
    </h1>
  );
};

export default Header;