import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router";
import style from './Error404.module.scss';


const Error404: FC = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <div className={style.container}>
      <p className={style.p}>Error</p>
      <Button onClick={handleOnClick} variant='contained'>Home</Button>
    </div>
  );
};

export default Error404;