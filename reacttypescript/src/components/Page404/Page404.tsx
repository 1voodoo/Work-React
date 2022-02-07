import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import style from './Page404.module.scss'

const Page404: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => () => {
    navigate('/');
  }
  return (
    <div className={style.conteiner}>
      <h1>404</h1>
      <Button onClick={handleClick()} variant="contained">Back Home</Button>
      </div>
  );
};

export default Page404;