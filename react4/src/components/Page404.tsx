import { Button } from "@mui/material";
import { FC } from "react";
import style from './Page404.module.scss'
import { useNavigate } from "react-router-dom";

const Page404: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }
  
  return (
    <div className={style.body}>
      <h1>Ooooooops wrong page</h1>
      <Button onClick={handleClick} variant="contained">Back Home</Button>
    </div>
  );
};

export default Page404;